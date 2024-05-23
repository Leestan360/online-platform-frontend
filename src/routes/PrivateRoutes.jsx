import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = true;
  const isAuthenticatedOnSignup = true;

  return isAuthenticated || isAuthenticatedOnSignup ? (
    <div className="">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth/login"></Navigate>
  );
};

export default PrivateRoutes;