import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const ItemTable = () => {
    // Sample data for demonstration
    const items = [
        { _id: 1, name: 'Item A', images: ['image1.jpg', 'image2.jpg'], description: 'Description A', price: 50 },
        { _id: 2, name: 'Item B', images: ['image3.jpg', 'image4.jpg'], description: 'Description B', price: 80 }
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
                        <TableCell>Name</TableCell>
                        <TableCell>Images</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Action</TableCell> {/* New column */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => (
                        <TableRow 
                            key={item._id} 
                            sx={{ 
                                backgroundColor: '#EACEB4', 
                                borderRadius: '10px',
                                '&:hover': {
                                    backgroundColor: '#f8d887', // Change to desired hover color
                                }
                            }}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.images.join(', ')}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>{item.price}</TableCell>
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

export default ItemTable;
