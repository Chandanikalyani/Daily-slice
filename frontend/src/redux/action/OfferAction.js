import axios from 'axios';
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

export const getAllOffers = () => async (dispatch) => {
  try {
    dispatch({ type: OFFER_LIST_REQUEST });

    const { data } = await axios.get('/api/offers');

    dispatch({
      type: OFFER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OFFER_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateOffer = (id, updatedData) => async (dispatch) => {
  try {
    dispatch({ type: OFFER_UPDATE_REQUEST });

    const { data } = await axios.put(`/api/offers/${id}`, updatedData);

    dispatch({
      type: OFFER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OFFER_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const deleteOffer = (id) => async (dispatch) => {
  try {
    dispatch({ type: OFFER_DELETE_REQUEST });

    await axios.delete(`/api/offers/${id}`);

    dispatch({
      type: OFFER_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: OFFER_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
