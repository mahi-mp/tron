import { adminConstants } from "./action-types";
import { adminDataApi } from "../utils/api";

/**
 * All Actions for Admin
 */

/**
 * To update Admin state
 * @param {string} auth
 */
const authError = (error) => {
  return {
    type: adminConstants.AUTHENTICATION_FAILURE,
    authError: error,
    authLoading: false,
  };
};

const authSuccess = (response) => {
  localStorage.setItem("auth", response.data.status.data._id);
  localStorage.setItem("adminName", response.data.status.data.username);
  return {
    type: adminConstants.AUTHENTICATION_SUCCESS,
    auth: response.data.status.data._id,
    username: response.data.status.data.username,
    userData: response.data.status.data,
    authLoading: false,
  };
};

const getAuthentication = (data) => {
  return (dispatch, getState) => {
    adminDataApi
      .adminCredentialRequest(data)
      .then((response) => {
        dispatch(authSuccess(response));
      })
      .catch((error) => {
        dispatch(authError(error));
      });
  };
};

// sign up
const signUpEventError = (error) => {
  return {
    type: adminConstants.SIGN_UP_FAILURE,
    signUpEventError: error,
    signUpEventLoading: false,
  };
};

const signUpEventSuccess = (response) => {
  console.log("response",response);
  localStorage.setItem("auth", response.data.status.token);
  localStorage.setItem("adminName", response.data.status.username);
  return {
    type: adminConstants.SIGN_UP_SUCCESS,
    signUpEventData: response.data.status,
    signUpEventLoading: false,
  };
};

const signUpEvent = (data) => {
  return (dispatch, getState) => {
    adminDataApi
      .signUpEventRequest(data)
      .then((response) => {
        dispatch(signUpEventSuccess(response));
      })
      .catch((error) => {
        dispatch(signUpEventError(error));
      });
  };
};

// LOG OUT
const logOut = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("adminName");
  return {
    type: adminConstants.LOGOUT_ACTION,
    authLoading: true,
    username: null,
    auth: null,
    logOutRedirect: true,
  };
};
const resetError = () => {
  return {
    type: adminConstants.RESET_ERROR,
  };
};
const resetLogout = () => {
  return {
    type: adminConstants.RESET_LOGOUT,
  };
};

export const adminAction = {
  signUpEvent,
  getAuthentication,
  logOut,
  resetError,
  resetLogout,
};
