import axios from 'axios';
import {
  CREATE_PACKAGE_REQUEST,
  CREATE_PACKAGE_SUCCESS,
  CREATE_PACKAGE_FAILURE
} from '../constants/PackageConstants';

// Action creators
export const createPackage = (packageData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PACKAGE_REQUEST });

    const { data } = await axios.post('/api/packages', packageData);

    dispatch({
      type: CREATE_PACKAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PACKAGE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getAllPackages = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PACKAGES_REQUEST });

    const { data } = await axios.get('/api/packages');

    dispatch({
      type: GET_ALL_PACKAGES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PACKAGES_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};