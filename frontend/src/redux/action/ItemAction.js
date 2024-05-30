// ItemActions.js

import axios from 'axios';
import {
  ITEM_CREATE_REQUEST,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_FAIL,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  GET_ALL_ITEMS_REQUEST,
  GET_ALL_ITEMS_SUCCESS,
  GET_ALL_ITEMS_FAILURE

} from '../constants/ItemConstants';

// Action creators
export const createItem = (itemData) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_CREATE_REQUEST });

    const { data } = await axios.post('/api/items', itemData);

    dispatch({
      type: ITEM_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


export const deleteItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ITEM_REQUEST });
    await axios.delete(`/api/items/${itemId}`);
    dispatch({ type: DELETE_ITEM_SUCCESS, payload: itemId });
  } catch (error) {
    dispatch({
      type: DELETE_ITEM_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateItem = (itemId, updatedData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ITEM_REQUEST });
    const { data } = await axios.put(`/api/items/update/${itemId}`, updatedData);
    dispatch({ type: UPDATE_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_ITEM_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getAllItems = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ITEMS_REQUEST });
    const { data } = await axios.get('/api/items');
    dispatch({ type: GET_ALL_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_ITEMS_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};