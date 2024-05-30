const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');


// Create a new user
router.post('/register', UserController.registerUser);

// POST /api/signin
router.post('/signin',UserController.signInUser);


// Fetch all users
router.get('/all', UserController.getAllUsers);

//Create a new feedback
router.post('/feedback',UserController.createFeedback);

// Delete a user by ID
router.delete('/:id', UserController.deleteUserById);

// Update a user by ID
router.put('/:id', UserController.updateUserById);



module.exports = router;
