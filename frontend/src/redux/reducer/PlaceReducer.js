// PlaceReducer.js

import * as types from './PlaceConstants';

const initialState = {
  places: [],
  loading: false,
  error: null,
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PLACE_REQUEST:
    case types.CREATE_PLACE_REQUEST:
    case types.UPDATE_PLACE_REQUEST:
    case types.DELETE_PLACE_REQUEST:
      return { ...state, loading: true, error: null };
    case types.PLACE_SUCCESS:
      return { ...state, places: action.payload, loading: false, error: null };
    case types.CREATE_PLACE_SUCCESS:
      return { ...state, places: [...state.places, action.payload], loading: false, error: null };
    case types.UPDATE_PLACE_SUCCESS:
      const updatedPlaces = state.places.map((place) =>
        place._id === action.payload._id ? action.payload : place
      );
      return { ...state, places: updatedPlaces, loading: false, error: null };
    case types.DELETE_PLACE_SUCCESS:
      const filteredPlaces = state.places.filter((place) => place._id !== action.payload);
      return { ...state, places: filteredPlaces, loading: false, error: null };
    case types.PLACE_FAILURE:
    case types.CREATE_PLACE_FAILURE:
    case types.UPDATE_PLACE_FAILURE:
    case types.DELETE_PLACE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default placeReducer;