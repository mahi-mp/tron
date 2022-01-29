import { homeDataConstants } from "./action-types";
import { dataApi } from "../utils/api";

 const homeDataError = (error) => {
  return {
    type: homeDataConstants.HOME_DATA_FAILURE,
    homeDataError: error,
    homeDataLoading: true,
  };
};

const homeDataSuccess = (response) => {
  return {
    type: homeDataConstants.HOME_DATA_SUCCESS,
    homeData: response.data.data,
    homeDataLoading: false,
  };
};

const getData = (uId) => {
  
  return (dispatch, getState) => {
    dataApi
      .homeDataRequest(uId)
      .then((response) => {
        dispatch(homeDataSuccess(response));
      })
      .catch((error) => {
        dispatch(homeDataError(error));
      });
  };
};

const dateSelection = (date) => {
  return {
    type: homeDataConstants.SELECTED_DATE,
    selectedDtate: date
  };
};

export const homeAction = {
  getData,
  dateSelection
};
