// packagemodel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the packages
const packageSchema = new Schema({
  packageName: {
    type: String,
    required: true,
  },
  packageItem: {
    type: String,
    required: true,
  },
  off: {
    type: String, // Percentage discount
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  describe: {
    type: String,
    required: true,
  },
  duration: {
    type: String, // Duration in days, weeks, months, etc.
    
  },
}, { collection: 'packages' });

// Create the model
const Package = mongoose.model('Package', packageSchema);

module.exports = Package;