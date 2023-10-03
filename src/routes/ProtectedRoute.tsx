import React from 'react';
import useUser from '../context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

interface IProtectedRoute {
  children?: React.ReactNode;
}

function ProtectedRoute({ children }: IProtectedRoute) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
