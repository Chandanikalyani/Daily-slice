// OfferAction.js

const axios = require('axios');

// Set the base URL for your API
const API_BASE_URL = 'http://localhost:4000';

// Create a new offer
const createOffer = async (offerData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/offers`, offerData);
    return response.data;
  } catch (error) {
    console.error('Error creating offer:', error);
    throw error;
  }
};

// Get all offers
const getAllOffers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/offers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching offers:', error);
    throw error;
  }
};

// Get a single offer by ID
const getOfferById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/offers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching offer with ID ${id}:`, error);
    throw error;
  }
};

// Update a offer by ID
const updateOffer = async (id, offerData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/offers/${id}`, offerData);
    return response.data;
  } catch (error) {
    console.error(`Error updating offer with ID ${id}:`, error);
    throw error;
  }
};

// Delete a offer by ID
const deleteOffer = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/offers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting offer with ID ${id}:`, error);
    throw error;
  }
};

module.exports = {
  createOffer,
  getAllOffers,
  getOfferById,
  updateOffer,
  deleteOffer,
};
