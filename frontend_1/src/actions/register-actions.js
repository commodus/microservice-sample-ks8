import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.Web_Api_Url,
});

export const registerUser = (user) => {
  return (dispatch) => {
    // (dispatch,getstate) => ... we can take state with getState
    // this dispatch from react thunk middleware...
    return instance
      .put("/v1/register", user)
      .then((response) => dispatch(registerSuccess(user)))
      .catch((err) => {
        return dispatch(registerFailure(err.response.data));
      });
  };
};

export const registerSuccess = (user) => {
  return {
    type: "REGISTER_SUCCESS",
    payload: user,
  };
};

export const registerFailure = (errorMessage) => {
  return {
    type: "REGISTER_FAILURE",
    payload: errorMessage,
  };
};

export const handleUserChange = (user) => {
  return {
    type: "USER_CHANGE",
    payload: user,
  };
};
