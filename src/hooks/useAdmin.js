import axios from "axios";
import { useState } from "react";
const useAdmin = (email) => {
  const [isAdmin, SetIsAdmin] = useState("");
  const [adminloading, Setadminloading] = useState(true);
  axios.get(`http://localhost:4000/user/admin/${email}`).then((data) => {
    if (data.data.isAdmin) {
      SetIsAdmin(data.data.isAdmin);
      Setadminloading(false);
    }
  });
  return [isAdmin, adminloading];
};

export default useAdmin;
