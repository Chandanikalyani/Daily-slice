import axios from "axios";
import { toast } from "react-toastify";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_REQUEST,
  FEEDBACK_CREATE_REQUEST,
  FEEDBACK_CREATE_SUCCESS,
  FEEDBACK_CREATE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL
  
} from "../constants/UserConstants";


// Action to register a new user
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
 try {
    const { data } = await axios.post("/user/register", user); // Assuming this is the correct registration endpoint
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    });
    toast.success("registation Successfully!");
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response.data.error
    });
    toast.error("Registation Unsuccessfully!");
  }
}
// Action to sign in a user
export const signInUser = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });
  try {
    const { data } = await axios.post("/user/signin", { email, password }); // Assuming this is the correct sign-in endpoint
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data
    });

    toast.success("Sign In Successful!");
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.response.data.error
    });
    toast.error("Sign In Unsuccessful!");
  }
}

// Action to create feedback
export const createFeedback = (feedbackData) => async (dispatch) => {
  dispatch({ type: FEEDBACK_CREATE_REQUEST });
  try {
    const { data } = await axios.post("/api/feedback", feedbackData); // Assuming this is the correct endpoint for creating feedback
    dispatch({
      type: FEEDBACK_CREATE_SUCCESS,
      payload: data
    });
    toast.success("Feedback submitted successfully!");
  } catch (error) {
    dispatch({
      type: FEEDBACK_CREATE_FAIL,
      payload: error.response.data.error
    });
    toast.error("Failed to submit feedback!");
  }
}

// Action to delete a user by ID
export const deleteUserById = (id) => async (dispatch) => {
  dispatch({ type: USER_DELETE_REQUEST });
  try {
    await axios.delete(`/user/${id}`);
    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: id
    });
    toast.success("User deleted successfully!");
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error.response.data.error
    });
    toast.error("Failed to delete user!");
  }
};

// Action to update a user by ID
export const updateUserById = (id, userData) => async (dispatch) => {
  dispatch({ type: USER_UPDATE_REQUEST });
  try {
    const { data } = await axios.put(`/user/${id}`, userData);
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data
    });
    toast.success("User updated successfully!");
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error.response.data.error
    });
    toast.error("Failed to update user!");
  }
};