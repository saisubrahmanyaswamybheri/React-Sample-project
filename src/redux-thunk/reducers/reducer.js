import {
  FETCH_USERS,
  FETCH_USERS_LOADING,
  FETCH_USERS_ERROR,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_USERS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
