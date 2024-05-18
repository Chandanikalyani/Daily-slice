const mongoose = require('mongoose');

// Create a schema for the feedback
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
