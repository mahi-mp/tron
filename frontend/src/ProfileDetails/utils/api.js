import axios from "axios";

const apiURL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";

const profilePostRequest = (data, time,selectedDtate) => {
let uId=localStorage.getItem("auth")
  const config = {
    method: "POST",
    headers: {
      accept: "application/json",
    },
    data: {
      ...data,
      time: time,
      userId:uId,
      selectedDtate:selectedDtate
    },
  };
  return axios(`${apiURL}/profile`, config);
};

// Edit Profile
const editProfilePostRequest = (data, time,selectedDtate,recordId) => {
let uId=localStorage.getItem("auth")
  const config = {
    method: "PUT",
    headers: {
      accept: "application/json",
    },
    data: {
      ...data,
      time: time,
      updatedBy:uId,
      selectedDtate:selectedDtate,
      recordId:recordId
    },
  };
  return axios(`${apiURL}/editProfile`, config);
};

export const dataApi = {
  profilePostRequest,
  editProfilePostRequest
};
