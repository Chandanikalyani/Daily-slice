// OfferReducer.js

const {
    CREATE_OFFER_REQUEST,
    CREATE_OFFER_SUCCESS,
    CREATE_OFFER_FAILURE,
    GET_ALL_OFFERS_REQUEST,
    GET_ALL_OFFERS_SUCCESS,
    GET_ALL_OFFERS_FAILURE,
    GET_OFFER_BY_ID_REQUEST,
    GET_OFFER_BY_ID_SUCCESS,
    GET_OFFER_BY_ID_FAILURE,
    UPDATE_OFFER_REQUEST,
    UPDATE_OFFER_SUCCESS,
    UPDATE_OFFER_FAILURE,
    DELETE_OFFER_REQUEST,
    DELETE_OFFER_SUCCESS,
    DELETE_OFFER_FAILURE,
  } = require('./OfferConstants');
  
  const initialState = {
    offers: [],
    loading: false,
    error: null,
  };
  
  const OfferReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_OFFER_REQUEST:
      case GET_ALL_OFFERS_REQUEST:
      case GET_OFFER_BY_ID_REQUEST:
      case UPDATE_OFFER_REQUEST:
      case DELETE_OFFER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case CREATE_OFFER_SUCCESS:
        return {
          ...state,
          loading: false,
          offers: [...state.offers, action.payload],
        };
      case GET_ALL_OFFERS_SUCCESS:
        return {
          ...state,
          loading: false,
          offers: action.payload,
        };
      case GET_OFFER_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          offers: state.offers.find((offer) => offer.id === action.payload),
        };
      case UPDATE_OFFER_SUCCESS:
        return {
          ...state,
          loading: false,
          offers: state.offers.map((offer) =>
            offer.id === action.payload.id ? action.payload : offer
          ),
        };
      case DELETE_OFFER_SUCCESS:
        return {
          ...state,
          loading: false,
          offers: state.offers.filter((offer) => offer.id !== action.payload),
        };
      case CREATE_OFFER_FAILURE:
      case GET_ALL_OFFERS_FAILURE:
      case GET_OFFER_BY_ID_FAILURE:
      case UPDATE_OFFER_FAILURE:
      case DELETE_OFFER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  module.exports = OfferReducer;
  