import * as utils from "../utils";

import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.Web_Api_Url,
});

const accountState = {
  account: {
    _id: "",
    name: "",
    age: "",
    score: "",
  },
  errorMessage: "",
  redirectTo: "",
};

const loginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: { redirectTo: "/", user },
  };
};

const loginFailure = (errorMessage) => {
  return {
    type: "LOGIN_FAILURE",
    payload: errorMessage,
  };
};

const redirectToDashBoard = () => {
  return {
    type: "REDIRECT_TO_DASHBOARD",
  };
};

export const loginUser = (loginParam) => {
  return (dispatch) => {
    // (dispatch,getstate) => ... we can take state with getState
    // this dispatch from react thunk middleware...
    return instance
      .post("/v1/login", loginParam)
      .then((response) => {
        dispatch(loginSuccess(response.data));
        dispatch(redirectToDashBoard());
      })
      .catch((err) => {
        return dispatch(loginFailure(err.response.data));
      });
  };
};

export const accountReducer = (state = accountState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      utils.setAccountToLocal(action.payload.user);
      return {
        ...state,
        account: { ...action.payload.user },
      };

    case "LOGIN_FAILURE":
      return { ...state, errorMessage: action.payload };

    case "REDIRECT_TO_DASHBOARD":
      return { ...state, redirectTo: "/" };
    default:
      return state;
  }
};
