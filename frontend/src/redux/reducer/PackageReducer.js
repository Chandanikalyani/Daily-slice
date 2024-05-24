// packageReducer.js

const {
    CREATE_PACKAGE_REQUEST,
    CREATE_PACKAGE_SUCCESS,
    CREATE_PACKAGE_FAILURE,
    GET_ALL_PACKAGES_REQUEST,
    GET_ALL_PACKAGES_SUCCESS,
    GET_ALL_PACKAGES_FAILURE,
    GET_PACKAGE_BY_ID_REQUEST,
    GET_PACKAGE_BY_ID_SUCCESS,
    GET_PACKAGE_BY_ID_FAILURE,
    UPDATE_PACKAGE_REQUEST,
    UPDATE_PACKAGE_SUCCESS,
    UPDATE_PACKAGE_FAILURE,
    DELETE_PACKAGE_REQUEST,
    DELETE_PACKAGE_SUCCESS,
    DELETE_PACKAGE_FAILURE,
  } = require('./packageConstants');
  
  const initialState = {
    packages: [],
    loading: false,
    error: null,
  };
  
  const packageReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PACKAGE_REQUEST:
      case GET_ALL_PACKAGES_REQUEST:
      case GET_PACKAGE_BY_ID_REQUEST:
      case UPDATE_PACKAGE_REQUEST:
      case DELETE_PACKAGE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case CREATE_PACKAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          packages: [...state.packages, action.payload],
        };
      case GET_ALL_PACKAGES_SUCCESS:
        return {
          ...state,
          loading: false,
          packages: action.payload,
        };
      case GET_PACKAGE_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          packages: state.packages.find((pkg) => pkg.id === action.payload),
        };
      case UPDATE_PACKAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          packages: state.packages.map((pkg) =>
            pkg.id === action.payload.id ? action.payload : pkg
          ),
        };
      case DELETE_PACKAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          packages: state.packages.filter((pkg) => pkg.id !== action.payload),
        };
      case CREATE_PACKAGE_FAILURE:
      case GET_ALL_PACKAGES_FAILURE:
      case GET_PACKAGE_BY_ID_FAILURE:
      case UPDATE_PACKAGE_FAILURE:
      case DELETE_PACKAGE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  module.exports = packageReducer;
  