import {
  CREATE_PACKAGE_REQUEST,
  CREATE_PACKAGE_SUCCESS,
  CREATE_PACKAGE_FAILURE,
  GET_ALL_PACKAGES_REQUEST,
  GET_ALL_PACKAGES_SUCCESS,
  GET_ALL_PACKAGES_FAILURE,
  UPDATE_PACKAGE_REQUEST,
  UPDATE_PACKAGE_SUCCESS,
  UPDATE_PACKAGE_FAILURE,
  DELETE_PACKAGE_REQUEST,
  DELETE_PACKAGE_SUCCESS,
  DELETE_PACKAGE_FAILURE
 
} from '../constants/PackageConstants';

// Initial state
const initialState = {
  loading: false,
  packages: [],
  package: null,
  error: null,
};

// Reducer function
export const packageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PACKAGE_REQUEST:
      return { ...state, loading: true };
    case CREATE_PACKAGE_SUCCESS:
      return { ...state, loading: false, package: action.payload };
    case CREATE_PACKAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_ALL_PACKAGES_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_PACKAGES_SUCCESS:
      return { ...state, loading: false, packages: action.payload };
    case GET_ALL_PACKAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case UPDATE_PACKAGE_REQUEST:
        return { ...state, loading: true };
      case UPDATE_PACKAGE_SUCCESS:
        // You may need to update the state here based on your application logic
        return { ...state, loading: false, packages: action.payload };
      case UPDATE_PACKAGE_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case DELETE_PACKAGE_REQUEST:
        return { ...state, loading: true };
      case DELETE_PACKAGE_SUCCESS:
      
      case DELETE_PACKAGE_FAILURE:
        return { ...state, loading: false, error: action.payload };
    // Other cases for get by ID, update, delete...
    default:
      return state;
  }
};