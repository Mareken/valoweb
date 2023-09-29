import { AnimatePresence } from 'framer-motion';
import LoginPage from 'pages/LoginPage';
import MainClient from 'pages/MainClient';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<LoginPage />} />
        <Route path="/client" element={<MainClient />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
