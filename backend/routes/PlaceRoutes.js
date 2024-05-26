const express = require('express');
const router = express.Router();
const placeController = require('../controller/PlaceController');

// Route for creating a new place
router.post('/places', placeController.createPlace);

// Route for getting all places
router.get('/places', placeController.getAllPlaces);

// Route for getting a specific place by ID
router.get('/places/:id', placeController.getPlaceById);

// Route for updating a specific place by ID
router.put('/places/:id', placeController.updatePlaceById);

// Route for deleting a specific place by ID
router.delete('/places/:id', placeController.deletePlaceById);

module.exports = router;