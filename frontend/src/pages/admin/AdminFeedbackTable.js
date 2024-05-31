import React, { useEffect, useState } from "react";
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
  DialogActions,
} from "@mui/material";
import axios from "axios";
import { ImExit } from "react-icons/im";

const FeedbackTable = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/feedback");
        setFeedbackData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFeedbackData();
  }, []);

  const handleDelete = (id) => {
    setDeleteId(id);
    setOpenDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/feedback/${deleteId}`);
      setFeedbackData(feedbackData.filter((item) => item._id !== deleteId));
      setOpenDialog(false);
    } catch (err) {
      console.error("Failed to delete feedback", err);
    }
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <br/><br/>

<div>
            <a href='/admin/dashboard'>
            <button style={{height:"50px",width:"130px",fontSize:"18px",borderRadius:"10px",marginLeft:"85%"}}>&nbsp;<ImExit /> &nbsp;Exit&nbsp;</button>
            </a>
        </div>
        <br/>
      <div>
        <h3 style={{ color: "whitesmoke", textAlign: "center" }}>
          Feedback Viewer Table 
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
        <Table style={{width:"1300px"}}>
          <TableHead>
            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell sx={{ width: "500px" }}>Message</TableCell>{" "}
              {/* Adjust width here */}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbackData.map((feedback) => (
              <TableRow
                key={feedback._id}
                sx={{
                  backgroundColor: "#EACEB4",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#f8d887", // Change to desired hover color
                  },
                }}
              >
                <TableCell>{feedback.name}</TableCell>
                <TableCell>{feedback.email}</TableCell>
                <TableCell sx={{ width: "500px" }}>
                  {feedback.message}
                </TableCell>{" "}
                {/* Adjust width here */}
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(feedback._id)}
                    sx={{ textTransform: "none" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={openDialog} onClose={handleCancelDelete}>
        <DialogTitle>
          Are you sure you want to delete this feedback?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeedbackTable;
