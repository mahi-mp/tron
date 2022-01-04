import axios from "axios";

const apiURL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";

const mapDataRequest = () => {
  return axios.get(`${apiURL}/host`, {
    headers: {
      accept: "application/json",
    },
  });
};

export const dataApi = {
  mapDataRequest,
};
