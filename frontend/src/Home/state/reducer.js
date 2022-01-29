import { homeDataConstants } from "./action-types";
import moment from "moment";

const initialState = {
  homeData: [],
  homeDataLoading: true,
  homeDataError: null,

  selectedDtate:moment().format("DD-MM-YYYY")
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case homeDataConstants.HOME_DATA_SUCCESS:
      return {
        ...state,
        homeData: action.homeData,
        homeDataLoading: action.homeDataLoading,
      };
    case homeDataConstants.HOME_DATA_FAILURE:
      return {
        ...state,
        homeDataError: action.homeDataError,
        homeDataLoading: action.homeDataLoading,
      };


    case homeDataConstants.SELECTED_DATE:
      return {
        ...state,
        selectedDtate:action.selectedDtate
      };

    default:
      return state;
  }
};
export { home };
