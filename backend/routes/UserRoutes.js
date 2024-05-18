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


module.exports = router;
