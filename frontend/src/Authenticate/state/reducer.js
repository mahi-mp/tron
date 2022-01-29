import { adminConstants } from "./action-types";

const initialState = {
  auth: null,
  authError: null,
  userData: null,
  authLoading: true,
  username: null,
  roleType: null,
  logOutRedirect: false,
  currentUser: null,

  signUpEventData: [],
  signUpEventLoading: false,
  signUpEventError:null

};

const authenticate = (state = initialState, action) => {
  switch (action.type) {
    case adminConstants.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        authLoading: action.authLoading,
        roleType: action.roleType,
        auth: action.auth,
        userData: action.userData,
        username: action.username,
      };
    case adminConstants.AUTHENTICATION_FAILURE:
      return {
        ...state,
        authError: action.authError,
        authLoading: action.authLoading,
      };
      // sign up 
    case adminConstants.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpEventLoading: action.signUpEventLoading,
        signUpEventData: action.signUpEventData,
      };
    case adminConstants.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpEventError: action.signUpEventError,
        signUpEventLoading: action.signUpEventLoading,
      };

      // logOut
    case adminConstants.LOGOUT_ACTION:
      return {
        ...state,
        authLoading: action.authLoading,
        username: action.username,
        auth: action.auth,
        signUpEventData:[],
        logOutRedirect: true,
      };
    case adminConstants.RESET_ERROR:
      return {
        ...initialState,
      };
    case adminConstants.RESET_LOGOUT:
      return {
        ...state,
        logOutRedirect: false,
      };
    default:
      return state;
  }
};
export { authenticate };
