const express = require('express');
const router = express.Router();
const packageController = require('../controller/PackageController');

// Route to create a new package
router.post('/packages', packageController.createPackage);

// Route to get all packages
router.get('/packages', packageController.getAllPackages);

// Route to get a single package by ID
router.get('/packages/:id', packageController.getPackageById);

// Route to update a package by ID
router.put('/packages/:id', packageController.updatePackage);

// Route to delete a package by ID
router.delete('/packages/:id', packageController.deletePackage);

module.exports = router;