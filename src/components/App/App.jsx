import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import ErrorPage from '../../pages/ErrorPage/ErrorPage.jsx';
import LogInPage from '../../pages/LogInPage/LogInPage.jsx';
import MainPage from '../../pages/MainPage/MainPage.jsx';
import PresentPage from '../../pages/PresentPage/PresentPage.jsx';
import ResultPage from '../../pages/ResultPage/ResultPage.jsx';

function App() {
  return (
    <Routes>
      <Route
        path={ROUTES.default}
        element={<Navigate to={ROUTES.logInPage} replace />}
      />

      <Route path={ROUTES.logInPage} element={<LogInPage />} />

      <Route path={ROUTES.mainPage} element={<MainPage />} />

      <Route path={ROUTES.presentPage} element={<PresentPage />} />

      <Route path={ROUTES.errorPage} element={<ErrorPage />} />

      <Route path={ROUTES.resultPage} element={<ResultPage />} />

      <Route
        path={ROUTES.other}
        element={<Navigate to={ROUTES.errorPage} replace />}
      />
    </Routes>
  );
}

export default App;
