// ItemReducer.js

import {
  ITEM_CREATE_REQUEST,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_FAIL

} from '../constants/ItemConstants';

// Initial state
const initialState = {
  loading: false,
  items: [],
  error: null,
};

// Reducer function
export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_CREATE_REQUEST:
      return { ...state, loading: true };
    case ITEM_CREATE_SUCCESS:
      return { ...state, loading: false, items: [...state.items, action.payload] };
    case ITEM_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    // Other cases for list, details, update, delete...
    default:
      return state;
  }
};