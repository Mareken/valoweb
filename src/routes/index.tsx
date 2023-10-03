import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainClient from '../pages/MainClient';
import GamePage from '../pages/GamePage';
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="client" element={<MainClient />} />
          <Route path="game/:gameId" element={<GamePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
