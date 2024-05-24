import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const OfferTable = () => {
    // Sample data for demonstration
    const offers = [
        { _id: 1, item: 'Item A', description: 'Description A', duration: '1 month' },
        { _id: 2, item: 'Item B', description: 'Description B', duration: '2 months' }
    ];

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
                        <TableCell>Action</TableCell> {/* New column */}
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
                                    backgroundColor: '#f8d887', // Change to desired hover color
                                }
                            }}>
                            <TableCell>{offer.item}</TableCell>
                            <TableCell>{offer.description}</TableCell>
                            <TableCell>{offer.duration}</TableCell>
                            <TableCell>
                                <button>Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default OfferTable;
