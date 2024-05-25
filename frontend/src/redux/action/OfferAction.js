import axios from 'axios';
import {
  OFFER_CREATE_REQUEST,
  OFFER_CREATE_SUCCESS,
  OFFER_CREATE_FAIL
} from '../constants/OfferConstants';

// Action creators
export const createOffer = (offerData) => async (dispatch) => {
  try {
    dispatch({ type: OFFER_CREATE_REQUEST });

    const { data } = await axios.post('/api/offers', offerData);

    dispatch({
      type: OFFER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OFFER_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};