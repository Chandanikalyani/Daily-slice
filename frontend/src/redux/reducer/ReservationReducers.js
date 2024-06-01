// reducers/reservationReducers.js
import {
  CREATE_RESERVATION_REQUEST,
  CREATE_RESERVATION_SUCCESS,
  CREATE_RESERVATION_FAIL
} from '../constants/ReservationConstants';

export const reservationCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_RESERVATION_REQUEST:
      return { loading: true };
    case CREATE_RESERVATION_SUCCESS:
      return { loading: false, success: true };
    case CREATE_RESERVATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
