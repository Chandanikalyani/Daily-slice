import axios from 'axios';
import {
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  CREATE_FEEDBACK_FAILURE,
  GET_FEEDBACK_REQUEST,
  GET_FEEDBACK_SUCCESS,
  GET_FEEDBACK_FAILURE,
  DELETE_FEEDBACK_REQUEST,
  DELETE_FEEDBACK_SUCCESS,
  DELETE_FEEDBACK_FAILURE
} from '../constants/FeedbackConstants';

// Create feedback action
export const createFeedback = (feedback) => async (dispatch) => {
  dispatch({ type: CREATE_FEEDBACK_REQUEST });
  try {
    const response = await axios.post('/api/feedback', feedback);
    dispatch({ type: CREATE_FEEDBACK_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_FEEDBACK_FAILURE, payload: error.message });
  }
};

// Get all feedback action
export const getAllFeedback = () => async (dispatch) => {
  dispatch({ type: GET_FEEDBACK_REQUEST });
  try {
    const response = await axios.get('/api/feedback');
    dispatch({ type: GET_FEEDBACK_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_FEEDBACK_FAILURE, payload: error.message });
  }
};


// Delete feedback by ID action
export const deleteFeedbackById = (id) => async (dispatch) => {
  dispatch({ type: DELETE_FEEDBACK_REQUEST });
  try {
    await axios.delete(`/api/feedback/${id}`);
    dispatch({ type: DELETE_FEEDBACK_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_FEEDBACK_FAILURE, payload: error.message });
  }
};