// models/Reservation.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  placeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Place'
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Reservation', reservationSchema);
