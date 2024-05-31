import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import PackageAdd from "./AdminAddPackagePopup";
import { ImExit } from "react-icons/im";


const PackageTable = () => {
    const [packages, setPackages] = useState([]);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedPackageId, setSelectedPackageId] = useState(null);

    // Fetch data from the database
    useEffect(() => {
        fetch('http://localhost:4000/api/packages')
            .then(response => response.json())
            .then(data => setPackages(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Handle delete confirmation
    const handleDeleteConfirm = () => {
        // Perform delete action here
        fetch(`http://localhost:4000/api/packages/${selectedPackageId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Remove the deleted package from the state
                setPackages(packages.filter(pkg => pkg._id !== selectedPackageId));
            }
        })
        .catch(error => console.error('Error deleting package:', error))
        .finally(() => {
            setDeleteDialogOpen(false);
            setSelectedPackageId(null);
        });
    };

    // Open delete confirmation dialog
    const handleDeleteClick = (packageId) => {
        setSelectedPackageId(packageId);
        setDeleteDialogOpen(true);
    };

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
            <PackageAdd/>
        </div>
        <br></br>
        <div>
            <h3 style={{color:"whitesmoke",textAlign:"center"}}>Package Managment Table</h3><br/>
        </div>
        <Paper sx={{
            margin: 'auto',
            border: '2px solid #000',
            borderRadius: '10px',
            backgroundColor: '#BB5A5A',
            width: 'fit-content',
        }}>
            <Table style={{width:"1300px"}}>
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
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDeleteClick(pkg._id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this package?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleDeleteConfirm} autoFocus color='error'>Confirm</Button>
                </DialogActions>
            </Dialog>
        </Paper>
        </>
    );
};

export default PackageTable;
