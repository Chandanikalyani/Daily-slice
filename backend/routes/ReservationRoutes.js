// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const reservationController = require('../controller/ReservationController');

router.post('/reservations', reservationController.createReservation);
router.get('/reservations', reservationController.getAllReservations);
router.put('/reservations/:id', reservationController.updateReservation);
router.delete('/reservations/:id', reservationController.deleteReservation);


module.exports = router;
