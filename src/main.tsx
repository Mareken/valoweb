import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
