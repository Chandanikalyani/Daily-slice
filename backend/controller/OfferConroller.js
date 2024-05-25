const Offer = require('../Models/OfferModel');

// Create a new offer
exports.createOffer = async (req, res) => {
  try {
    const newOffer = new Offer(req.body);
    const savedOffer = await newOffer.save();
    res.status(201).json(savedOffer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all offers
exports.getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single offer by ID
exports.getOfferById = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.status(200).json(offer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an offer by ID
exports.updateOffer = async (req, res) => {
  try {
    const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedOffer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.status(200).json(updatedOffer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an offer by ID
exports.deleteOffer = async (req, res) => {
  try {
    const deletedOffer = await Offer.findByIdAndDelete(req.params.id);
    if (!deletedOffer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.status(200).json({ message: 'Offer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};