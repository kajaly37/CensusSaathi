import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'USER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  authError: string | null;
  clearAuthError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'cs_auth_token';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);

  // Validate session token on startup
  useEffect(() => {
    async function verifyExistingToken() {
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          // Token expired or invalid
          setToken(null);
          setUser(null);
          try {
            localStorage.removeItem(TOKEN_KEY);
          } catch {
            // ignore
          }
        }
      } catch (err) {
        console.warn('Could not verify existing session:', err);
      } finally {
        setIsLoading(false);
      }
    }

    verifyExistingToken();
  }, [token]);

  const login = async (email: string, password: string) => {
    setAuthError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      setToken(data.token);
      setUser(data.user);
      try {
        localStorage.setItem(TOKEN_KEY, data.token);
      } catch {
        // ignore
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setAuthError(message);
      throw new Error(message);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setAuthError(null);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setToken(data.token);
      setUser(data.user);
      try {
        localStorage.setItem(TOKEN_KEY, data.token);
      } catch {
        // ignore
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Registration failed';
      setAuthError(message);
      throw new Error(message);
    }
  };

  const logout = async () => {
    try {
      if (token) {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      }
    } catch {
      // ignore
    } finally {
      setToken(null);
      setUser(null);
      setAuthError(null);
      try {
        localStorage.removeItem(TOKEN_KEY);
      } catch {
        // ignore
      }
    }
  };

  const clearAuthError = () => setAuthError(null);

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: Boolean(user),
    isAdmin: user?.role === 'ADMIN',
    login,
    register,
    logout,
    isLoading,
    authError,
    clearAuthError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
