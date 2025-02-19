import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { HomePage } from './pages/Home/HomePage';
import DiaryPage from './pages/Diary/DiaryPage';
import CalculatorPage from './pages/Calculator/CalculatorPage';
import { LoginPage } from './pages/Login/LoginPage';
import RegistrationPage from './pages/Registration/RegistrationPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { theme } from './components/Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* Public routes */}
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/calculator">
                <HomePage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/diary">
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <RestrictedRoute redirectTo="/diary">
                <RegistrationPage />
              </RestrictedRoute>
            }
          />

          {/* Private routes */}
          <Route
            path="/diary"
            element={
              <PrivateRoute redirectTo="/login">
                <DiaryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute redirectTo="/login">
                <CalculatorPage />
              </PrivateRoute>
            }
          />

          {/* 404 catch-all */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;