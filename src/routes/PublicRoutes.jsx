import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;