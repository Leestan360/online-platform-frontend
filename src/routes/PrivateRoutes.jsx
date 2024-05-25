import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/store";

const PrivateRoutes = () => {
  const isAuthenticated = useAuthStore((state) => state.token);

  return isAuthenticated ? (
    <div className="">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth/login"></Navigate>
  );
};

export default PrivateRoutes;