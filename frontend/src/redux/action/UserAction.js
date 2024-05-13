import axios from "axios";
import { toast } from "react-toastify";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,

  USER_SIGNIN_FAIL ,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_REQUEST,
  
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL

} from "../../../constants/UserConstants";


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

// Action to load all users
export const loadAllUsers = () => async (dispatch) => {
  dispatch({ type: USER_LOAD_REQUEST });
  try {
    const { data } = await axios.get("/user/all"); // Assuming this is the correct endpoint
    dispatch({
      type: USER_LOAD_SUCCESS,
      payload: data.users // Assuming the response structure has a 'users' property containing the array of users
    });
    toast.success("Users loaded successfully!");
  } catch (error) {
    dispatch({
      type: USER_LOAD_FAIL,
      payload: error.response.data.error
    });
    toast.error("Failed to load users!");
  }
}
