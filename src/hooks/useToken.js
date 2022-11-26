import axios from "axios";
import { useState } from "react";
const useToken = (email) => {
  const [token, SetToken] = useState("");
  axios.get(`http://localhost:4000/jwt?email=${email}`).then((data) => {
    if (data.data.accessToken) {
      localStorage.setItem("accessToken", data.data.accessToken);
      SetToken(data.data.accessToken);
    }
  });
  return [token];
};

export default useToken;
