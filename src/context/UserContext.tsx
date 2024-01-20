import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Credentials, IUserContext } from '../types';

const UserContext = createContext<IUserContext | null>(null);

function UserProvider({ children }) {
  const [user, setUser] = useState<Credentials>(null);
  const navigate = useNavigate();

  function signIn(saveLocal = false, credentials: Credentials) {
    setUser(credentials);

    if (saveLocal) {
      localStorage.setItem('valoweb', JSON.stringify(credentials));
    } else {
      if (localStorage.getItem('valoweb')) localStorage.removeItem('valoweb');
    }

    navigate('/client');
  }

  function signOut() {
    setUser(null);
    navigate('/');
  }

  const value = useMemo(
    () => ({
      user,
      signIn,
      signOut,
      setUser
    }),
    [user, signIn, signOut, setUser]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
}

export { UserProvider };

