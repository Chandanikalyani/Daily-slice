import axios from 'axios';
import {
  CREATE_PACKAGE_REQUEST,
  CREATE_PACKAGE_SUCCESS,
  CREATE_PACKAGE_FAILURE,
  GET_ALL_PACKAGES_REQUEST,
  GET_ALL_PACKAGES_SUCCESS,
  GET_ALL_PACKAGES_FAILURE,
  UPDATE_PACKAGE_REQUEST,
  UPDATE_PACKAGE_SUCCESS,
  UPDATE_PACKAGE_FAILURE,
  DELETE_PACKAGE_REQUEST,
  DELETE_PACKAGE_SUCCESS,
  DELETE_PACKAGE_FAILURE
} from '../constants/PackageConstants';

// Action creators
export const createPackage = (packageData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PACKAGE_REQUEST });

    const { data } = await axios.post('/api/packages', packageData);

    dispatch({
      type: CREATE_PACKAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PACKAGE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getAllPackages = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PACKAGES_REQUEST });

    const { data } = await axios.get('/api/packages');

    dispatch({
      type: GET_ALL_PACKAGES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PACKAGES_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


// Action creator to update a package by ID
export const updatePackageById = (id, packageData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PACKAGE_REQUEST });

    const { data } = await axios.put(`/api/packages/${id}`, packageData);

    dispatch({
      type: UPDATE_PACKAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PACKAGE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Action creator to delete a package by ID
export const deletePackageById = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PACKAGE_REQUEST });

    await axios.delete(`/api/packages/${id}`);

    dispatch({
      type: DELETE_PACKAGE_SUCCESS,
      payload: id, // Send the ID of the deleted package
    });
  } catch (error) {
    dispatch({
      type: DELETE_PACKAGE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};