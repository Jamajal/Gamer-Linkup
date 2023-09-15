import { createContext, useState, useEffect } from 'react';

import { api, createSession, verifySession } from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: any }) => {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    id: 0,
    username: '',
  });

  const getUser = async (token: string) => {
    const response = await verifySession(token);
    if (response) setUser(response.data);
  };

  useEffect(() => {
    const recoverToken = localStorage.getItem('token');

    if (recoverToken) {
      setToken(recoverToken);
      getUser(recoverToken);
    }

    setLoading(false);
  }, []);

  const test = () => {
    console.log('teste');
  };

  const login = async (email: string, password: string) => {
    const response = await createSession(email, password);

    if (response.status == 200) {
      const userToken = response.data.token;

      getUser(userToken);

      localStorage.setItem('token', userToken);

      api.defaults.headers.Authorization = `Bearer ${userToken}`;
    }
  };

  const logout = () => {
    setToken('');
    api.defaults.headers.Authorization = null;
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!token, user, test, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
