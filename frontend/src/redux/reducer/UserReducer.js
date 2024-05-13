import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,

    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOAD_FAIL

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

// Reducer function for loading all users
export const userReducerLoad = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return { loading: true, users: [] };
    case USER_LOAD_SUCCESS:
      return {
        loading: false,
        users: action.payload
      };
    case USER_LOAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


  
  