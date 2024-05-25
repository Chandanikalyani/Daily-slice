const express = require('express');
const router = express.Router();
const { createItem, getAllItems, getSingleItem, updateItem, deleteItem } = require('../controller/ItemController');

// Item routes
router.post('/items', createItem);
router.get('/items', getAllItems);
router.get('/items/:id', getSingleItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

module.exports = router;