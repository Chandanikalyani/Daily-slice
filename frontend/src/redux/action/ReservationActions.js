// actions/reservationActions.js
import axios from 'axios';
import {
  CREATE_RESERVATION_REQUEST,
  CREATE_RESERVATION_SUCCESS,
  CREATE_RESERVATION_FAIL
} from '../constants/ReservationConstants';

export const createReservation = (
  email,
  contactNumber,
  place,
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
      { email, contactNumber, place, date, time, duration },
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
