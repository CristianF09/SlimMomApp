import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemeProvider theme={theme}>
        <SharedLayout>
          <Outlet />
        </SharedLayout>
      </ThemeProvider>
    ),
    children: [
      {
        index: true,
        element: (
          <RestrictedRoute redirectTo="/calculator">
            <HomePage />
          </RestrictedRoute>
        )
      },
      {
        path: '/login',
        element: (
          <RestrictedRoute redirectTo="/diary">
            <LoginPage />
          </RestrictedRoute>
        )
      },
      {
        path: '/registration',
        element: (
          <RestrictedRoute redirectTo="/diary">
            <RegistrationPage />
          </RestrictedRoute>
        )
      },
      {
        path: '/diary',
        element: (
          <PrivateRoute redirectTo="/login">
            <DiaryPage />
          </PrivateRoute>
        )
      },
      {
        path: '/calculator',
        element: (
          <PrivateRoute redirectTo="/login">
            <CalculatorPage />
          </PrivateRoute>
        )
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

function App() {
  // Remove any <BrowserRouter> here
  return <RouterProvider router={router} />;
}

export default App;