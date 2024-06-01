// controllers/reservationController.js
const Reservation = require('../Models/ReservationModel');

// Create a reservation
exports.createReservation = async (req, res) => {
  try {
    const {
      email,
      contactNumber,
      placeId,
      place,
      date,
      time,
      duration
    } = req.body;

    // Calculate end time based on duration and start time
    const startTime = new Date(`${date}T${time}`);
    const endTime = new Date(startTime.getTime() + duration * 60 * 60 * 1000);

    const reservation = new Reservation({
      email,
      contactNumber,
      place,
      placeId,
      date,
      time,
      duration,
      endTime
    });

    await reservation.save();

    res.status(201).json({ message: 'Reservation created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
