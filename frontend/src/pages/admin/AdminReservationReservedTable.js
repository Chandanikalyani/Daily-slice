import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { ImExit } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReservationTable = () => {
    const [reservations, setReservations] = useState([]);
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const [selectedReservationId, setSelectedReservationId] = useState(null);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [actionType, setActionType] = useState(''); // 'accept' or 'cancel'

    // Fetch data from the database
    useEffect(() => {
        fetch('http://localhost:4000/api/reservations')
            .then(response => response.json())
            .then(data => setReservations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Update place availability
    const updatePlaceAvailability = (placeId, availability) => {
        fetch(`http://localhost:4000/api/places/${placeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ availability })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => console.error('Error updating place availability:', error));
    };

    // Update Reservation availability
    const updateReservationStatus = (reservationId, status) => {
        fetch(`http://localhost:4000/api/reservations/${reservationId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => console.error('Error updating reservation status:', error));
    };

    // Handle accepting reservation and updating place availability
    const handleAcceptClick = (placeId, reservation) => {
        setSelectedPlaceId(placeId);
        setSelectedReservationId(reservation._id);
        setActionType('accept');
        setConfirmDialogOpen(true);
    };

    // Handle canceling reservation and updating place availability to available
    const handleCancelClick = (placeId, reservation) => {
        setSelectedPlaceId(placeId);
        setSelectedReservationId(reservation._id);
        setActionType('cancel');
        setConfirmDialogOpen(true);
        
    };

    // Confirm action (accept or cancel)
    const handleConfirmAction = () => {
        if (actionType === 'accept') {
            updatePlaceAvailability(selectedPlaceId, 'Not Available');
            updateReservationStatus(selectedReservationId, 'Reserved');
            toast.success('Reservation accepted successfully!');
            window.location.reload();
        } else if (actionType === 'cancel') {
            updatePlaceAvailability(selectedPlaceId, 'Available');
            updateReservationStatus(selectedReservationId, 'Reservation Over');
            toast.success('Reservation canceled successfully!');
            window.location.reload();
        }
        setConfirmDialogOpen(false);
        setSelectedPlaceId(null);
        setActionType('');
    };

    // Format date to remove 'T00:00:00.000Z'
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };

    // Format time to AM/PM
    const formatTime = (time) => {
        return new Date(time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    };

    return (
        <>
            <ToastContainer />
            {/* <h1>Reservation id {selectedPlaceId}</h1> //Display the selected place ID */}
            <br/><br/>
            <div>
                <a href='/admin/dashboard'>
                <button style={{height:"50px",width:"130px",fontSize:"18px",borderRadius:"10px",marginLeft:"85%"}}>&nbsp;<ImExit /> &nbsp;Exit&nbsp;</button>
                </a>
            </div>
            <br/>
            <div>
                <a href='/admin/adminreservationtable'>
                <button style={{height:"50px",width:"200px",fontSize:"18px",borderRadius:"10px",marginLeft:"80%"}}>Pending Table Manage</button>
                </a>
            </div>
            <br></br>
            <div>
                <h3 style={{color:"whitesmoke",textAlign:"center"}}>Reserved Reservation Management Table</h3><br/>
            </div>
            <Paper sx={{
                margin: 'auto',
                border: '2px solid #000',
                borderRadius: '10px',
                backgroundColor: '#BB5A5A',
                width: 'fit-content',
            }}>
                <Table style={{width:"100%"}}>
                    <TableHead>
                        <TableRow sx={{ fontWeight: 'bold' }}>
                            <TableCell>Email</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Place</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Start Time</TableCell>
                            <TableCell>Duration(hrs)</TableCell>
                            <TableCell>End Time</TableCell>
                            <TableCell>Action</TableCell> {/* New column */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservations.map(reservation => (
                            reservation.status === 'Reserved' &&
                            <TableRow
                                key={reservation._id}
                                sx={{
                                    backgroundColor: '#EACEB4',
                                    borderRadius: '10px',
                                    '&:hover': {
                                        backgroundColor: '#f8d887', // Change to desired hover color
                                    }
                                }}>
                                <TableCell>{reservation.email}</TableCell>
                                <TableCell>{reservation.contactNumber}</TableCell>
                                <TableCell>{reservation.place}</TableCell>
                                <TableCell>{formatDate(reservation.date)}</TableCell>
                                <TableCell>{reservation.time}</TableCell>
                                <TableCell>{reservation.duration}</TableCell>
                                <TableCell>{formatTime(reservation.endTime)}</TableCell>
                                <TableCell>
                                    {/* <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleAcceptClick(reservation.placeId, reservation)}
                                    >
                                        Accept
                                    </Button> */}
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleCancelClick(reservation.placeId, reservation)}
                                    >
                                        Clear Table
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            <Dialog open={confirmDialogOpen} onClose={() => setConfirmDialogOpen(false)}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    {actionType === 'accept' ? 'Are you sure you want to accept this reservation?' : 'Are you sure you want to Clear This Table?'}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleConfirmAction} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
        </>
    );
};

export default ReservationTable;
