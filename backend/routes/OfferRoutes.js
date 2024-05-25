const express = require('express');
const router = express.Router();
const offerController = require('../controller/OfferConroller');

// Route to create a new offer
router.post('/offers', offerController.createOffer);

// Route to get all offers
router.get('/offers', offerController.getAllOffers);

// Route to get a single offer by ID
router.get('/offers/:id', offerController.getOfferById);

// Route to update an offer by ID
router.put('/offers/:id', offerController.updateOffer);

// Route to delete an offer by ID
router.delete('/offers/:id', offerController.deleteOffer);

module.exports = router;