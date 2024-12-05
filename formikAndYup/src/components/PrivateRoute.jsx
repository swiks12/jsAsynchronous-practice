import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
    // some logic aathawa condition pura vayo vane chai yah bata thyo route ko element pathaidine
  const loggedStatus = useSelector((state) => state.user.isLoggedIn);
  return loggedStatus ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
