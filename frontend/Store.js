import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userRegisterReducer,userReducerSignIn } from './reducers/UserReducer'; // Assuming you have a separate file for user reducers
import { composeWithDevTools } from 'redux-devtools-extension';



// Combine reducers
const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignIn:userReducerSignIn
  // Add other reducers if you have them
});

//initial state
let initialState ={
  userSignIn:{
    userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
  }
};

// Create store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);


export default store;