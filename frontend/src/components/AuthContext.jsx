'use client'
import React, { createContext, useState } from 'react';
import AxiosInstance from "@/components/AxiosInstance";


export const AuthContext = createContext();
console.log(AuthContext);

// const state = useContext(name)
// console.log(state)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  });

  const login = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  const logout = async () => {
    const res = await AxiosInstance.post('/user/logout');
    if (res) {
      console.log('Logout');
    }
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
