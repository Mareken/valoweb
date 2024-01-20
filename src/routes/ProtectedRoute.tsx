import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useUser from '../context/UserContext';

interface IProtectedRoute {
  children?: React.ReactNode;
}

function ProtectedRoute({ children }: IProtectedRoute) {
  const { user } = useUser();

  if (!user && !localStorage.getItem('valoweb')) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
