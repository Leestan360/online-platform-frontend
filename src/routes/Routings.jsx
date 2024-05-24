import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import SignupPage from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/LoginPage";
import HomePage from "../pages/home/HomePage";
import CatFactsPage from "../pages/data/CatFactsPage";

const Routings = ({ authToken, signToken }) => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route exact path="/auth/signup" element={<SignupPage />} />
        <Route exact path="/auth/login" element={<LoginPage />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/cat-fact/facts" element={<CatFactsPage />} />
      </Route>
    </Routes>
  );
};

export default Routings;
