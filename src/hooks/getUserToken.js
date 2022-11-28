import axios, { isCancel, AxiosError } from "axios";

const getUserToken = (email) => {
  const url = `https://y-tan-one.vercel.app/jwt?email=${email}`;
  axios.get(url).then((data) => {
    localStorage.setItem({ accessToken: data });
  });
};
