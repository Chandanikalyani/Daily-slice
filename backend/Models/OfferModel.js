const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the offers
const offerSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  describe: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
}, { collection: 'offers' });

// Create the model
const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;