import { mapDataConstants } from "./action-types";

const initialState = {
  mapData: [],
  mapDataLoading: true,
  mapDataError: null,
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case mapDataConstants.GET_DATA_SUCCESS:
      return {
        ...state,
        mapData: action.mapData,
        mapDataLoading: action.mapDataLoading,
      };
    case mapDataConstants.GET_DATA_FAILURE:
      return {
        ...state,
        mapDataError: action.mapDataError,
        mapDataLoading: action.mapDataLoading,
      };

    default:
      return state;
  }
};
export { map };
