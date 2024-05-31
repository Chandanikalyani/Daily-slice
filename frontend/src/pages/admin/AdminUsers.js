import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ImExit } from "react-icons/im";

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleClickOpen = (userId) => {
        setSelectedUserId(userId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/user/${selectedUserId}`)
            .then(() => {
                setUsers(users.filter(user => user._id !== selectedUserId));
                handleClose();
            })
            .catch(error => {
                console.error('Error deleting user:', error);
                handleClose();
            });
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
            <h3 style={{color:"whitesmoke",textAlign:"center"}}>User Managment Table</h3><br/>
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
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Number</TableCell>
                        <TableCell>Action</TableCell> {/* New column */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow 
                            key={user._id} 
                            sx={{ 
                                backgroundColor: '#EACEB4', 
                                borderRadius: '10px',
                                '&:hover': {
                                    backgroundColor: '#f8d887', // Change to desired hover color
                                }
                            }}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.number}</TableCell>
                            <TableCell>
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    onClick={() => handleClickOpen(user._id)}
                                    sx={{
                                        borderRadius: '5px',
                                        backgroundColor: '#d32f2f',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#b71c1c'
                                        }
                                    }}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{"Confirm Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="error" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
        </>
    );
};

export default UserTable;
