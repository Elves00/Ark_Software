import { Outlet, Navigate } from "react-router-dom";

const Private = () => {
  return localStorage.getItem("authToken") ? (
    <Outlet />
  ) : (
    <Navigate replace to="/login" />
  );
};

export default Private;
