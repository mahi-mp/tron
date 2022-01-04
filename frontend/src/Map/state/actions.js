import { mapDataConstants } from "./action-types";
import { dataApi } from "../utils/api";

 const mapDataError = (error) => {
  return {
    type: mapDataConstants.GET_DATA_FAILURE,
    mapDataError: error,
    mapDataLoading: true,
  };
};

const mapDataSuccess = (response) => {
  return {
    type: mapDataConstants.GET_DATA_SUCCESS,
    mapData: response.data.data,
    mapDataLoading: false,
  };
};

const getData = () => {
  return (dispatch, getState) => {
    dataApi
      .mapDataRequest()
      .then((response) => {
        dispatch(mapDataSuccess(response));
      })
      .catch((error) => {
        dispatch(mapDataError(error));
      });
  };
};

export const mapAction = {
  getData,
};
