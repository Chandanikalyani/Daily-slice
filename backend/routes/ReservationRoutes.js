// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const reservationController = require('../controller/ReservationController');

router.post('/reservations', reservationController.createReservation);

module.exports = router;
