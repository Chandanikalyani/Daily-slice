// ItemAction.js

const axios = require('axios');

// Set the base URL for your API
const API_BASE_URL = 'http://localhost:4000';

// Create a new item
const createItem = async (itemData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/items`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Get all items
const getAllItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Get a single item by ID
const getItemById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching item with ID ${id}:`, error);
    throw error;
  }
};

// Update an item by ID
const updateItem = async (id, itemData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/items/${id}`, itemData);
    return response.data;
  } catch (error) {
    console.error(`Error updating item with ID ${id}:`, error);
    throw error;
  }
};

// Delete an item by ID
const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting item with ID ${id}:`, error);
    throw error;
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
