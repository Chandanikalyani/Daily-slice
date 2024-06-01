const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for places
const placeSchema = new Schema({
  place_no: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  number_of_tables: {
    type: Number,
    required: true,
  },
  number_of_chairs: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['indoor', 'outdoor'],
    required: true,
  },
  images: {
    type: [String],

  },
  availability: {
    type: String,
    enum: ['Available', 'Not Available'],
    required: true,
    default :'Available',
  },
}, { collection: 'places' });

// Create the model
const Place = mongoose.model('Place', placeSchema);

module.exports = Place;