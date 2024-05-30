import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import axios from 'axios';

const OfferTable = () => {
    const [offers, setOffers] = useState([]);
    const [deleteOfferId, setDeleteOfferId] = useState(null);
    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

    // Fetch offers from the API
    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/offers');
                setOffers(response.data);
            } catch (error) {
                console.error('Error fetching offers:', error);
            }
        };
        fetchOffers();
    }, []);

    // Function to handle opening confirmation dialog
    const handleOpenConfirmationDialog = (offerId) => {
        setDeleteOfferId(offerId);
        setOpenConfirmationDialog(true);
    };

    // Function to handle closing confirmation dialog
    const handleCloseConfirmationDialog = () => {
        setOpenConfirmationDialog(false);
    };

    // Function to delete an offer
    const handleDeleteOffer = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/offers/${deleteOfferId}`);
            setOffers(offers.filter(offer => offer._id !== deleteOfferId));
            setOpenConfirmationDialog(false);
        } catch (error) {
            console.error('Error deleting offer:', error);
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
                        <TableCell>Item</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {offers.map(offer => (
                        <TableRow 
                            key={offer._id} 
                            sx={{ 
                                backgroundColor: '#EACEB4', 
                                borderRadius: '10px',
                                '&:hover': {
                                    backgroundColor: '#f8d887', 
                                }
                            }}>
                            <TableCell>{offer.item}</TableCell>
                            <TableCell>{offer.description}</TableCell>
                            <TableCell>{offer.duration}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="error" onClick={() => handleOpenConfirmationDialog(offer._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Confirmation Dialog */}
            <Dialog
                open={openConfirmationDialog}
                onClose={handleCloseConfirmationDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Offer"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this offer?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirmationDialog}>Cancel</Button>
                    <Button onClick={handleDeleteOffer} autoFocus color='error'>Delete</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default OfferTable;
