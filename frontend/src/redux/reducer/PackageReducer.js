import {
  CREATE_PACKAGE_REQUEST,
  CREATE_PACKAGE_SUCCESS,
  CREATE_PACKAGE_FAILURE,
  GET_ALL_PACKAGES_REQUEST,
  GET_ALL_PACKAGES_SUCCESS,
  GET_ALL_PACKAGES_FAILURE,
  // Other constants
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
    // Other cases for get by ID, update, delete...
    default:
      return state;
  }
};