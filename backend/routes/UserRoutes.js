const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');


// Create a new user
router.post('/register', UserController.registerUser);

// POST /api/signin
router.post('/signin',UserController.signInUser);


// Get all users
router.get('/users', UserController.getAllUsers);


module.exports = router;
