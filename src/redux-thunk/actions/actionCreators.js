import {
  FETCH_USERS,
  FETCH_USERS_LOADING,
  FETCH_USERS_ERROR,
} from "./actionTypes";

export const fetchusers = (data) => {
  return {
    type: FETCH_USERS,
    payload: data,
  };
};

export const fetchUsersLoading = () => {
  return {
    type: FETCH_USERS_LOADING,
  };
};

export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

export const fetchUsersAsync = () => {
  return async (dispatch) => {
    dispatch(fetchUsersLoading());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      dispatch(fetchusers(data));
    } catch (error) {
      dispatch(fetchUsersError(error.message));
    }
  };
};
