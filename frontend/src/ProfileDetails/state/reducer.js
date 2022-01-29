import { profileConstants } from "./action-types";

const initialState = {
  profilePostData: null,
  profilePostLoading: true,
  profilePostError: null,

  editProfilePostData: null,
  editProfilePostLoading: true,
  editProfilePostError: null,
};

const profileDetails = (state = initialState, action) => {
  switch (action.type) {
    // Post profile
    case profileConstants.PROFILE_POST_SUCCESS:
      return {
        ...state,
        profilePostData: action.profilePostData,
        profilePostLoading: action.profilePostLoading,
      };
    case profileConstants.PROFILE_POST_FAILURE:
      return {
        ...state,
        profilePostError: action.profilePostError,
        profilePostLoading: action.profilePostLoading,
      };
      // Edit profile
    case profileConstants.EDIT_PROFILE_POST_SUCCESS:
      return {
        ...state,
        editProfilePostData: action.editProfilePostData,
        editProfilePostLoading: action.editProfilePostLoading,
      };
    case profileConstants.EDIT_PROFILE_POST_FAILURE:
      return {
        ...state,
        editProfilePostError: action.editProfilePostError,
        editProfilePostLoading: action.editProfilePostLoading,
      };

      // PROFILE RESET
    case profileConstants.PROFILE_RESET:
      return {
        ...state,
        profilePostData: null,
        profilePostLoading: true,
        profilePostError: null,
        editProfilePostData: null,
        editProfilePostLoading: true,
        editProfilePostError: null,
      };

    default:
      return state;
  }
};
export { profileDetails };
