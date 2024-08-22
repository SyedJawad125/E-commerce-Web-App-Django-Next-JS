'use client'
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log('AuthProvider is rendered');
  
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  });

  const login = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  const logout = async () => {
    try {
      // Assuming you're calling an API to log out
      await AxiosInstance.post('/user/logout');
      localStorage.removeItem('token');
      setToken(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
