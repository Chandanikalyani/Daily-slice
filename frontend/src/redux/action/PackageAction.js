// packageAction.js

const axios = require('axios');

// Set the base URL for your API
const API_BASE_URL = 'http://localhost:4000';

// Create a new package
const createPackage = async (packageData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/packages`, packageData);
    return response.data;
  } catch (error) {
    console.error('Error creating package:', error);
    throw error;
  }
};

// Get all packages
const getAllPackages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/packages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching packages:', error);
    throw error;
  }
};

// Get a single package by ID
const getPackageById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/packages/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching package with ID ${id}:`, error);
    throw error;
  }
};

// Update a package by ID
const updatePackage = async (id, packageData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/packages/${id}`, packageData);
    return response.data;
  } catch (error) {
    console.error(`Error updating package with ID ${id}:`, error);
    throw error;
  }
};

// Delete a package by ID
const deletePackage = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/packages/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting package with ID ${id}:`, error);
    throw error;
  }
};

module.exports = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};
