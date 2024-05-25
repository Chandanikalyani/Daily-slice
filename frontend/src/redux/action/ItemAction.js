// ItemActions.js

import axios from 'axios';
import {
  ITEM_CREATE_REQUEST,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_FAIL


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