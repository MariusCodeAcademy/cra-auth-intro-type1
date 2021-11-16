import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = React.createContext({
  login: () => {},
  logout: () => {},
  userName: '',
  token: '',
});

AuthContext.displayName = 'AuthContext';

function AuthProvider({ children }) {
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');

  const login = (email, token) => {
    console.log('file: AuthContext.js variable: login:');
    setUserName(email);
    setToken(token);
    toast.success(email + ' logged in');
  };
  const logout = () => {
    setUserName('');
    setToken(null);
  };

  const authCtx = {
    login,
    logout,
    userName,
    token,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
