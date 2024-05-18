import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,

    FEEDBACK_CREATE_REQUEST,
    FEEDBACK_CREATE_SUCCESS,
    FEEDBACK_CREATE_FAIL

  } from "../constants/UserConstants";
  
  
  
  
  // Reducer function for user registration
  export const userReducerSignUp = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return {userInfo: null,loading: true};
      case USER_REGISTER_SUCCESS:
        return {
          
          loading: false,
        
          userInfo: action.payload,
          
        };
      case USER_REGISTER_FAIL:
        return { loading: false, userInfo: null, isAuthenticated: false, error: action.payload }
      default:
        return state;
    }
  };

  // Reducer function for user sign-in
export const userReducerSignIn = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true
      };
    case USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

  // Initial state for feedback
const initialState = {
  loading: false,
  success: false,
  error: null,
};

// Reducer function for creating feedback
export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEEDBACK_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case FEEDBACK_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case FEEDBACK_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};