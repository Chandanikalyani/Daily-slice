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

const initialState = {
  loading: false,
  feedbacks: [],
  error: null,
};

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FEEDBACK_REQUEST:
    case GET_FEEDBACK_REQUEST:
    case DELETE_FEEDBACK_REQUEST:
      return { ...state, loading: true };

    case CREATE_FEEDBACK_SUCCESS:
      return { ...state, loading: false, feedbacks: [...state.feedbacks, action.payload] };

    case GET_FEEDBACK_SUCCESS:
      return { ...state, loading: false, feedbacks: action.payload };

    case DELETE_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        feedbacks: state.feedbacks.filter((feedback) => feedback._id !== action.payload)
      };

    case CREATE_FEEDBACK_FAILURE:
    case GET_FEEDBACK_FAILURE:
    case DELETE_FEEDBACK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
