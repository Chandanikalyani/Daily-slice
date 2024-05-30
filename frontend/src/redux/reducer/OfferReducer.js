import {
  OFFER_CREATE_REQUEST,
  OFFER_CREATE_SUCCESS,
  OFFER_CREATE_FAIL,
  OFFER_LIST_REQUEST,
  OFFER_LIST_SUCCESS,
  OFFER_LIST_FAIL,
  OFFER_UPDATE_REQUEST,
  OFFER_UPDATE_SUCCESS,
  OFFER_UPDATE_FAIL,
  OFFER_DELETE_REQUEST,
  OFFER_DELETE_SUCCESS,
  OFFER_DELETE_FAIL
} from '../constants/OfferConstants';

// Initial state
const initialState = {
  loading: false,
  offers: [],
  error: null,
};

// Reducer function
export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFER_CREATE_REQUEST:
    case OFFER_LIST_REQUEST:
    case OFFER_UPDATE_REQUEST:
    case OFFER_DELETE_REQUEST:
      return { ...state, loading: true };
    case OFFER_CREATE_SUCCESS:
      return { ...state, loading: false, offer: action.payload };
    case OFFER_LIST_SUCCESS:
      return { ...state, loading: false, offers: action.payload };
    case OFFER_UPDATE_SUCCESS:
      return { ...state, loading: false, offers: state.offers.map(offer => offer._id === action.payload._id ? action.payload : offer) };
    case OFFER_DELETE_SUCCESS:
      return { ...state, loading: false, offers: state.offers.filter(offer => offer._id !== action.payload) };
    case OFFER_CREATE_FAIL:
    case OFFER_LIST_FAIL:
    case OFFER_UPDATE_FAIL:
    case OFFER_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
