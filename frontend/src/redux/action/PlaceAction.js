// placeAction.js

import axios from 'axios';
import * as types from './PlaceConstants';

export const getPlaces = () => async (dispatch) => {
  dispatch({ type: types.PLACE_REQUEST });
  try {
    const response = await axios.get('/api/places'); // Adjust the endpoint accordingly
    dispatch({ type: types.PLACE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.PLACE_FAILURE, payload: error.response.data.message });
  }
};

export const createPlace = (placeData) => async (dispatch) => {
  dispatch({ type: types.CREATE_PLACE_REQUEST });
  try {
    const response = await axios.post('/api/places', placeData); // Adjust the endpoint accordingly
    dispatch({ type: types.CREATE_PLACE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.CREATE_PLACE_FAILURE, payload: error.response.data.message });
  }
};

export const updatePlace = (id, updatedPlaceData) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PLACE_REQUEST });
  try {
    const response = await axios.put('/api/places/${id}', updatedPlaceData); // Adjust the endpoint accordingly
    dispatch({ type: types.UPDATE_PLACE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_PLACE_FAILURE, payload: error.response.data.message });
  }
};

export const deletePlace = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_PLACE_REQUEST });
  try {
    await axios.delete('/api/places/${id}'); // Adjust the endpoint accordingly
    dispatch({ type: types.DELETE_PLACE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.DELETE_PLACE_FAILURE, payload: error.response.data.message });
  }
};