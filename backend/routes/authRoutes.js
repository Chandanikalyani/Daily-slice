const express = require('express');
const router = express.Router();
const { signInUser, register } = require('../controller/authController');


router.post('/signin', signInUser);
router.post('/register', register);


module.exports = router;