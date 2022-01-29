import { profileConstants } from "./action-types";
import { dataApi } from "../utils/api";


// Post profile
 const profilePostError = (error) => {
  return {
    type: profileConstants.PROFILE_POST_FAILURE,
    profilePostError: error,
    profilePostLoading: true,
  };
};

const profilePostSuccess = (response) => {
  return {
    type: profileConstants.PROFILE_POST_SUCCESS,
    profilePostData: response.data.status,
    profilePostLoading: false,
  };
};

const profilePost = (values,timeStamp,selectedDtate) => {
  
  return (dispatch, getState) => {
    dataApi
      .profilePostRequest(values,timeStamp,selectedDtate)
      .then((response) => {
        dispatch(profilePostSuccess(response));
      })
      .catch((error) => {
        dispatch(profilePostError(error));
      });
  };
};

// Edit profile
 const editProfilePostError = (error) => {
  return {
    type: profileConstants.EDIT_PROFILE_POST_FAILURE,
    editProfilePostError: error,
    editProfilePostLoading: true,
  };
};

const editProfilePostSuccess = (response) => {
  return {
    type: profileConstants.EDIT_PROFILE_POST_SUCCESS,
    editProfilePostData: response.data.status,
    editProfilePostLoading: false,
  };
};

const editProfilePost = (values,timeStamp,selectedDtate,recordId) => {
  
  return (dispatch, getState) => {
    dataApi
      .editProfilePostRequest(values,timeStamp,selectedDtate,recordId)
      .then((response) => {
        dispatch(editProfilePostSuccess(response));
      })
      .catch((error) => {
        dispatch(editProfilePostError(error));
      });
  };
};


const resetprofilePost = (values,timeStamp) => {
  
  return {
    type: profileConstants.PROFILE_RESET,
  };
};

export const profileAction = {
  profilePost,
  resetprofilePost,
  editProfilePost
};
