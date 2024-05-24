import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const PackageTable = () => {
    // Sample data for demonstration
    const packages = [
        { _id: 1, packageName: 'Package A', packageItem: 'Item A', off: 10, price: 50, description: 'Description A', duration: '1 month' },
        { _id: 2, packageName: 'Package B', packageItem: 'Item B', off: 20, price: 80, description: 'Description B', duration: '2 months' }
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
                        <TableCell>Package Name</TableCell>
                        <TableCell>Package Item</TableCell>
                        <TableCell>Off (%)</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Action</TableCell> {/* New column */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {packages.map(pkg => (
                        <TableRow 
                            key={pkg._id} 
                            sx={{ 
                                backgroundColor: '#EACEB4', 
                                borderRadius: '10px',
                                '&:hover': {
                                    backgroundColor: '#f8d887', // Change to desired hover color
                                }
                            }}>
                            <TableCell>{pkg.packageName}</TableCell>
                            <TableCell>{pkg.packageItem}</TableCell>
                            <TableCell>{pkg.off}</TableCell>
                            <TableCell>{pkg.price}</TableCell>
                            <TableCell>{pkg.description}</TableCell>
                            <TableCell>{pkg.duration}</TableCell>
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

export default PackageTable;
