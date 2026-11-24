import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { apiRequest } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('vitalsync_token'));
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('vitalsync_user') || 'null');
    } catch {
      return null;
    }
  });
  const [checking, setChecking] = useState(Boolean(token));

  useEffect(() => {
    let active = true;
    async function verifySession() {
      if (!token) {
        setChecking(false);
        return;
      }
      try {
        const result = await apiRequest('/auth/me', { token });
        if (active) {
          setUser(result.user);
          localStorage.setItem('vitalsync_user', JSON.stringify(result.user));
        }
      } catch {
        if (active) {
          setToken(null);
          setUser(null);
          localStorage.removeItem('vitalsync_token');
          localStorage.removeItem('vitalsync_user');
        }
      } finally {
        if (active) setChecking(false);
      }
    }
    verifySession();
    return () => { active = false; };
  }, []);

  function saveSession(data) {
    localStorage.setItem('vitalsync_token', data.token);
    localStorage.setItem('vitalsync_user', JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
  }

  function logout() {
    localStorage.removeItem('vitalsync_token');
    localStorage.removeItem('vitalsync_user');
    setToken(null);
    setUser(null);
  }

  const value = useMemo(() => ({
    token, user, checking, saveSession, logout
  }), [token, user, checking]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
