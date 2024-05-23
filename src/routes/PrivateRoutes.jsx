import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = false;
  const isAuthenticatedOnSignup = false;

  return isAuthenticated || isAuthenticatedOnSignup ? (
    <div className="">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth/login"></Navigate>
  );
};

export default PrivateRoutes;