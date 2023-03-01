import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import ROUTES from "../../constants/routes.js";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.jsx";
import LogInPage from "../../pages/LogInPage/LogInPage.jsx";
import MainPage from "../../pages/MainPage/MainPage.jsx";
import PresentPage from "../../pages/PresentPage/PresentPage.jsx";

const Rotes = () => {
  return (
    <Routes>

      <Route path={ROUTES.default} element={ <Navigate to={ROUTES.mainPage } replace /> } />

      <Route path={ROUTES.logInPage} element={ <LogInPage /> } />

      <Route path={ROUTES.mainPage} element={ <MainPage /> } />

      <Route path={ROUTES.presentPage} element={ <PresentPage /> } />

      <Route path={ROUTES.errorPage} element={ <ErrorPage /> } />

      <Route path={ROUTES.other} element={ <Navigate to={ROUTES.errorPage } replace /> } />

    </Routes>
  );
};

export default Rotes;
