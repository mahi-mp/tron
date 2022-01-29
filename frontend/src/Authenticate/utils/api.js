import axios from "axios";
// import dotEnv from "dotenv";
// dotEnv.config();

// const apiURL = process.env.REACT_APP_BASE_URL;
const apiURL = "http://localhost:3002"

const adminCredentialRequest = (data) => {
  return axios.post(
    `${apiURL}/login`,
    {
      ...data,
    },
    {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    }
  );
};


const signUpEventRequest = (data) => {
  return axios.post(
    `${apiURL}/signup`,
    {
      ...data,
    },
    {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    }
  );
};

export const adminDataApi = {
  adminCredentialRequest,
  signUpEventRequest
};
