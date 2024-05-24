// ItemReducer.js

const {
    CREATE_ITEM_REQUEST,
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_FAILURE,
    GET_ALL_ITEMS_REQUEST,
    GET_ALL_ITEMS_SUCCESS,
    GET_ALL_ITEMS_FAILURE,
    GET_ITEM_BY_ID_REQUEST,
    GET_ITEM_BY_ID_SUCCESS,
    GET_ITEM_BY_ID_FAILURE,
    UPDATE_ITEM_REQUEST,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAILURE,
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE,
  } = require('./ItemConstants');
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const ItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ITEM_REQUEST:
      case GET_ALL_ITEMS_REQUEST:
      case GET_ITEM_BY_ID_REQUEST:
      case UPDATE_ITEM_REQUEST:
      case DELETE_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case CREATE_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
          items: [...state.items, action.payload],
        };
      case GET_ALL_ITEMS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload,
        };
      case GET_ITEM_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          items: state.items.find((item) => item.id === action.payload),
        };
      case UPDATE_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
          items: state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
      case DELETE_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      case CREATE_ITEM_FAILURE:
      case GET_ALL_ITEMS_FAILURE:
      case GET_ITEM_BY_ID_FAILURE:
      case UPDATE_ITEM_FAILURE:
      case DELETE_ITEM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  module.exports = ItemReducer;
  