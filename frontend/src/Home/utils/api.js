import axios from "axios";

const apiURL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";

const homeDataRequest = (data) => {
return axios.get(`${apiURL}/profileData`, {
  params: {
    data: data,
  },
  headers: {
    accept: "application/json",
  },
});
}

export const dataApi = {
  homeDataRequest,
};
