import axios from 'axios';
import {
  CREATE_RESERVATION_REQUEST,
  CREATE_RESERVATION_SUCCESS,
  CREATE_RESERVATION_FAIL,
  GET_RESERVATIONS_REQUEST,
  GET_RESERVATIONS_SUCCESS,
  GET_RESERVATIONS_FAIL,
  UPDATE_RESERVATION_REQUEST,
  UPDATE_RESERVATION_SUCCESS,
  UPDATE_RESERVATION_FAIL,
  DELETE_RESERVATION_REQUEST,
  DELETE_RESERVATION_SUCCESS,
  DELETE_RESERVATION_FAIL
} from '../constants/ReservationConstants';

export const createReservation = (
  email,
  contactNumber,
  place,
  placeId,
  date,
  time,
  duration
) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_RESERVATION_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/reservations',
      { email, contactNumber, place, placeId, date, time, duration },
      config
    );

    dispatch({
      type: CREATE_RESERVATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_RESERVATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getReservations = () => async (dispatch) => {
  try {
    dispatch({ type: GET_RESERVATIONS_REQUEST });

    const { data } = await axios.get('/api/reservations');

    dispatch({
      type: GET_RESERVATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_RESERVATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateReservation = (
  id,
  email,
  contactNumber,
  place,
  date,
  time,
  duration
) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_RESERVATION_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `/api/reservations/${id}`,
      { email, contactNumber, place, date, time, duration },
      config
    );

    dispatch({
      type: UPDATE_RESERVATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_RESERVATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteReservation = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_RESERVATION_REQUEST });

    await axios.delete(`/api/reservations/${id}`);

    dispatch({
      type: DELETE_RESERVATION_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_RESERVATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
