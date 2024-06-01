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

// Get all reservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a reservation by ID
exports.updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, contactNumber, place, date, time, duration } = req.body;

    const startTime = new Date(`${date}T${time}`);
    const endTime = new Date(startTime.getTime() + duration * 60 * 60 * 1000);

    const reservation = await Reservation.findByIdAndUpdate(
      id,
      { email, contactNumber, place, date, time, duration, endTime },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a reservation by ID
exports.deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findByIdAndDelete(id);

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
