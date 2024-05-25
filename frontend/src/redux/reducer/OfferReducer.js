import {
  OFFER_CREATE_REQUEST,
  OFFER_CREATE_SUCCESS,
  OFFER_CREATE_FAIL
} from '../constants/OfferConstants';

// Initial state
const initialState = {
  loading: false,
  offer: null,
  error: null,
};

// Reducer function
export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFER_CREATE_REQUEST:
      return { ...state, loading: true };
    case OFFER_CREATE_SUCCESS:
      return { ...state, loading: false, offer: action.payload };
    case OFFER_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};