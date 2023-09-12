import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { connect } from 'react-redux';
import { getLoggedInUser } from 'utils/helpers';

const AuthContext = createContext({
  isAuthenticated: true,
  isLoading: true,
  setAuthenticated: () => undefined,
});

const TAuthProvider = ({
  children,
  loggedIn,
}) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const initializeAuth = async () => {
      setAuthenticated(loggedIn);
      setLoading(false);
    };
    initializeAuth();
  }, [loggedIn]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const mapAuthState = (s) => ({
  isLoggedIn: !!s.login.isLoggedIn,
  loggedIn: getLoggedInUser().loggedIn,
});

export const AuthProvider = connect(mapAuthState, {})(TAuthProvider);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useIsAuthenticated() {
  const context = useAuth();
  return context.isAuthenticated;
}
