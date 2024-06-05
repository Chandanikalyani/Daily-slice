import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ItemAdd from "./AdminAddItemPopup";
import { ImExit } from "react-icons/im";


const ItemTable = () => {
    const [items, setItems] = useState([]);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/items');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once when component mounts

    const deleteItem = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/items/${deleteItemId}`);
            // Filter out the deleted item from the local state
            setItems(items.filter(item => item._id !== deleteItemId));
            setDeleteItemId(null);
            setOpenDialog(false);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleOpenDialog = (itemId) => {
        setDeleteItemId(itemId);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
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
            <ItemAdd/>
        </div>
        <br/>
        <div>
            <div>
            <h3 style={{color:"whitesmoke",textAlign:"center"}}>Item Managment table</h3><br/>
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
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
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
                                        backgroundColor: '#f8d887',
                                    }
                                }}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                    <button 
                                        onClick={() => handleOpenDialog(item._id)}
                                        style={{
                                            backgroundColor: '#D32F2F',
                                            color: '#FFFFFF',
                                            border: 'none',
                                            borderRadius: '5px',
                                            padding: '5px 10px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            outline: 'none',
                                        }}
                                    >
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this item?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={deleteItem} variant="contained" color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
        </>
    );
};

export default ItemTable;
