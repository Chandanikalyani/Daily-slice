const Feedback = require('../Models/FeedbackModel');

// Create a new feedback
exports.createFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};

// Get all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve feedbacks' });
  }
};


// Delete feedback by ID
exports.deleteFeedbackById = async (req, res) => {
  try {
    const feedbackId = req.params.id;
    await Feedback.findByIdAndDelete(feedbackId);
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete feedback' });
  }
};