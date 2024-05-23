import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";

const Routings = ({ authToken, signToken }) => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route exact path="/auth/signup" element={<SignupPage />} />
        <Route exact path="/auth/login" element={<LoginPage />} />
      </Route>
      <Route element={<PrivateRoutes />}></Route>
    </Routes>
  );
};

export default Routings;
