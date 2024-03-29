import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { AuthContext, AuthProvider } from '../contexts/authContext';
import { useContext } from 'react';

import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';

const Private = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) return <div className="loading">Carregando...</div>;

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Private>
        <HomePage />
      </Private>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
