import axios, { isCancel, AxiosError } from "axios";

const getUserToken = (email) => {
  const url = `http://localhost:4000/jwt?email=${email}`;
  axios.get(url).then((data) => {
    localStorage.setItem({ accessToken: data });
  });
};
