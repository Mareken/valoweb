import { AnimatePresence } from 'framer-motion';
import GamePage from 'pages/GamePage';
import LoginPage from 'pages/LoginPage';
import MainClient from 'pages/MainClient';
import NotFound from 'pages/NotFound';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<LoginPage />} />
        <Route
          element={
            <Layout>
              <ProtectedRoute />
            </Layout>
          }
        >
          <Route path="client" element={<MainClient />} />
          <Route path="game/:gameId" element={<GamePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
