import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const PlaceTable = () => {
    const [places, setPlaces] = useState([]);
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    // Fetch data from the database
    useEffect(() => {
        fetch('http://localhost:4000/api/places')
            .then(response => response.json())
            .then(data => setPlaces(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleOpenConfirmationDialog = (placeId) => {
        setSelectedPlaceId(placeId);
        setOpenDialog(true);
    };

    const handleCloseConfirmationDialog = () => {
        setSelectedPlaceId(null);
        setOpenDialog(false);
    };

    const handleDeletePlace = () => {
        if (selectedPlaceId) {
            fetch(`http://localhost:4000/api/places/${selectedPlaceId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    // Remove the deleted place from the local state
                    setPlaces(prevPlaces => prevPlaces.filter(place => place._id !== selectedPlaceId));
                } else {
                    console.error('Failed to delete place');
                }
            })
            .catch(error => console.error('Error deleting place:', error))
            .finally(() => {
                setSelectedPlaceId(null);
                setOpenDialog(false);
            });
        }
    };

    return (
        <Paper sx={{
            margin: 'auto',
            border: '2px solid #000',
            borderRadius: '10px',
            backgroundColor: '#BB5A5A',
            width: 'fit-content',
        }}>
            <Table>
                <TableHead>
                    <TableRow sx={{ fontWeight: 'bold' }}>
                        <TableCell>Place No</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Num of Tables</TableCell>
                        <TableCell>Num of Chairs</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {places.map(place => (
                        <TableRow
                            key={place._id}
                            sx={{
                                backgroundColor: '#EACEB4',
                                borderRadius: '10px',
                                '&:hover': {
                                    backgroundColor: '#f8d887', // Change to desired hover color
                                }
                            }}>
                            <TableCell>{place.place_no}</TableCell>
                            <TableCell>{place.description}</TableCell>
                            <TableCell>{place.number_of_tables}</TableCell>
                            <TableCell>{place.number_of_chairs}</TableCell>
                            <TableCell>{place.type}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="error" onClick={() => handleOpenConfirmationDialog(place._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={openDialog} onClose={handleCloseConfirmationDialog}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this place?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirmationDialog}>Cancel</Button>
                    <Button onClick={handleDeletePlace} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default PlaceTable;
