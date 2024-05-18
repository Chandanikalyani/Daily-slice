import axios from "axios";
import { toast } from "react-toastify";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,

  USER_SIGNIN_FAIL ,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_REQUEST,

  FEEDBACK_CREATE_REQUEST,
  FEEDBACK_CREATE_SUCCESS,
  FEEDBACK_CREATE_FAIL
  
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