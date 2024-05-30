const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/FeedbackController');

// Route to create feedback
router.post('/feedback', feedbackController.createFeedback);

// Route to get all feedback
router.get('/feedback', feedbackController.getAllFeedback);

// Route to delete feedback by ID
router.delete('/feedback/:id', feedbackController.deleteFeedbackById);

module.exports = router;
