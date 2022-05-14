import { Outlet, Navigate } from "react-router-dom";

const Private = () => {
  return localStorage.getItem("authToken") ? (
    <Outlet />
  ) : (
    <div>
      <Navigate replace to="/login" />
    </div>
  );
};

export default Private;
