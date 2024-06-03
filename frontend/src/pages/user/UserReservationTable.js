import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { ImExit } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserReservationTable = () => {
  const [reservations, setReservations] = useState([]);
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] = useState(false);
  const [reservationIdToDelete, setReservationIdToDelete] = useState(null);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:4000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const fetchReservations = (email) => {
    fetch("http://localhost:4000/api/reservations")
      .then((response) => response.json())
      .then((data) => {
        // Filter reservations based on user email
        const userReservations = data.filter(reservation => reservation.email === email);
        setReservations(userReservations);
        setShowEmailInput(false); // Hide email input and show reservations
      })
      .catch((error) => console.error("Error fetching reservations:", error));
  };

  const handleDeleteClick = (reservationId) => {
    // Open the confirmation dialog
    setReservationIdToDelete(reservationId);
    setDeleteConfirmationDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // Perform deletion action here
    fetch(`http://localhost:4000/api/reservations/${reservationIdToDelete}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        // Delete successful, close the confirmation dialog and refresh reservations
        setDeleteConfirmationDialogOpen(false);
        fetchReservations(userEmail);
      } else {
        // Delete failed, handle error
        throw new Error('Failed to delete reservation');
      }
    })
    .catch(error => {
      console.error('Error deleting reservation:', error);
      // Optionally, you can show an error message to the user
      toast.error("Failed to delete reservation", { position: "top-center" });
    });
  };

  const handleCancelDelete = () => {
    // Close the confirmation dialog
    setDeleteConfirmationDialogOpen(false);
  };

  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleEmailSubmit = () => {
    const userExists = users.some(user => user.email === emailInput);
    if (userExists) {
      setUserEmail(emailInput);
      fetchReservations(emailInput); // Pass userEmail to fetchReservations
    } else {
      toast.error("Email not registered", { position: "top-center" });
    }
  };

  return (
    <>
      <ToastContainer />
      {showEmailInput ? (
        <div style={{ textAlign: "center", marginTop: "20vh" ,background:"white",height:"250px",width:"500px",alignSelf:"center",marginLeft:"400px",borderRadius:"50px"}}>
          <br/>
          <h2>Enter Your Email Here</h2><br/>
          <TextField
            label="Email"
            variant="outlined"
            value={emailInput}
            onChange={handleEmailInputChange}
            style={{ width: "300px" }}
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleEmailSubmit} style={{ marginTop: "20px" }}>
            Submit
          </Button>
        </div>
      ) : (
        <>
          <br />
          <br />
          <div>
            <a href="/user/dashboard">
              <button
                style={{
                  height: "50px",
                  width: "130px",
                  fontSize: "18px",
                  borderRadius: "10px",
                  marginLeft: "85%",
                }}
              >
                &nbsp;
                <ImExit /> &nbsp;Exit&nbsp;
              </button>
            </a>
          </div>
          <br />
          <div></div>
          <br></br>
          <div>
            <h3 style={{ color: "whitesmoke", textAlign: "center" }}>
              My Reservations Table
            </h3>
            <br />
          </div>
          <Paper
            sx={{
              margin: "auto",
              border: "2px solid #000",
              borderRadius: "10px",
              backgroundColor: "#BB5A5A",
              width: "fit-content",
            }}
          >
            <Table style={{ width: "100%" }}>
              <TableHead>
                <TableRow sx={{ fontWeight: "bold" }}>
                  <TableCell>Email</TableCell>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>Place</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Start Time</TableCell>
                  <TableCell>Duration(hrs)</TableCell>
                  <TableCell>End Time</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservations.map((reservation) => (
                  <TableRow
                    key={reservation._id}
                    sx={{
                      backgroundColor: "#EACEB4",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "#f8d887",
                      },
                    }}
                  >
                    <TableCell>{reservation.email}</TableCell>
                    <TableCell>{reservation.contactNumber}</TableCell>
                    <TableCell>{reservation.place}</TableCell>
                    <TableCell>{new Date(reservation.date).toLocaleDateString()}</TableCell>
                    <TableCell>{reservation.time}</TableCell>
                    <TableCell>{reservation.duration}</TableCell>
                    <TableCell>{new Date(reservation.endTime).toLocaleTimeString()}</TableCell>
                    <TableCell>{reservation.status}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDeleteClick(reservation._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          {/* Delete confirmation dialog */}
          <Dialog open={deleteConfirmationDialogOpen} onClose={handleCancelDelete}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
              Are you sure you want to delete this reservation?
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancelDelete}>Cancel</Button>
              <Button onClick={handleConfirmDelete} color="secondary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default UserReservationTable;
