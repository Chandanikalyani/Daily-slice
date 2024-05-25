// itemmodel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the items
const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: [String], // Array of image URLs
  },
  description: { // Fixed typo here
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, { collection: 'items' });

// Create the model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;