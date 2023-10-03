import React from 'react';
import { UserProvider } from './context/UserContext';
import AppRoutes from './routes';

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
