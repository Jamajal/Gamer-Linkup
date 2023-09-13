import { createContext, useState, useEffect } from 'react';

import { api, createSession } from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: any }) => {
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoverToken = localStorage.getItem('token');

        if (recoverToken) setToken(recoverToken);

        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        const response = await createSession(email, password);

        if (response.status == 200) {
            const token = response.data.token;

            localStorage.setItem('token', token);

            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
};

const logout = () => {
    setToken('');
    api.defaults.headers.Authorization = null;
    localStorage.removeItem('token');
};

    return (
        <AuthContext.Provider
        value={{ authenticated: !!token, token, loading, login, logout }}
        >
        {children}
        </AuthContext.Provider>
    );
};