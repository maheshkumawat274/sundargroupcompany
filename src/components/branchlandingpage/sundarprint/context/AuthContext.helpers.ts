import { createContext, useContext } from "react";

export interface User {
  name: string;
  email: string;
}

/* 👇 Auth Context Shape */
export interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

/* 👇 default user (guest) */
export const defaultUser: User | null = null;

/* 👇 Context */
export const AuthContext = createContext<AuthContextType>({
  user: defaultUser,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

/* 👇 Hook */
export const useAuth = () => useContext(AuthContext);
