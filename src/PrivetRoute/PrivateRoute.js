import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authcontext } from "../AuthoContext/AuthContextProvider";
import Loding from "../Components/Button/Loding";

const PrivateRoute = ({ children }) => {
  const { user, Loading } = useContext(authcontext);
  const location = useLocation();
  if (Loading) {
    return (
      <>
        <Loding></Loding>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
