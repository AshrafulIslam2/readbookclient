import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authcontext } from "../AuthoContext/AuthContextProvider";
import Loding from "../Components/Button/Loding";
import useAdmin from "../hooks/useAdmin";

const AdminPrivetRoute = ({ children }) => {
  const { user, Loading } = useContext(authcontext);

  const [isAdmin, adminloading] = useAdmin(user?.email);
  const location = useLocation();
  if (Loading || adminloading) {
    return (
      <>
        <Loding></Loding>
      </>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivetRoute;
