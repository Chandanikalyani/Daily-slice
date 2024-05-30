import {
  ITEM_CREATE_REQUEST,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_FAIL,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  GET_ALL_ITEMS_REQUEST,
  GET_ALL_ITEMS_SUCCESS,
  GET_ALL_ITEMS_FAILURE
} from '../constants/ItemConstants';

const initialState = {
  loading: false,
  items: [],
  error: null,
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_CREATE_REQUEST:
      return { ...state, loading: true };
    case ITEM_CREATE_SUCCESS:
      return { ...state, loading: false, items: [...state.items, action.payload] };
    case ITEM_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case DELETE_ITEM_REQUEST:
      return { ...state, loading: true };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case DELETE_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_ITEM_REQUEST:
      return { ...state, loading: true };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.map(item => item._id === action.payload._id ? action.payload : item)
      };
    case UPDATE_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case GET_ALL_ITEMS_REQUEST:
        return { ...state, loading: true };
      case GET_ALL_ITEMS_SUCCESS:
        return { ...state, loading: false, items: action.payload };
      case GET_ALL_ITEMS_FAILURE:
        return { ...state, loading: false, error: action.payload };
    // Other cases for list, details...
    default:
      return state;
  }
};
