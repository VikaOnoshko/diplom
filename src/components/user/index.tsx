import React, { useState } from 'react';

export type UserContextType = {
  isAuth: boolean;
  email: string | null;
  password: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const UserContext = React.createContext<UserContextType>({
  isAuth: false,
  email: null,
  password: null,
  login: () => {},
  logout: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const UserContextContainer = ({ children }: Props) => {
  const [isAuth, setisAuth] = useState<boolean>(
    !!localStorage.getItem('email'),
  );
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [password, setPassword] = useState(localStorage.getItem('password'));

  const login = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
    setisAuth(true);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };

  const logout = () => {
    setEmail('');
    setPassword('');
    setisAuth(false);
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  };

  return (
    <UserContext.Provider value={{ isAuth, email, password, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
