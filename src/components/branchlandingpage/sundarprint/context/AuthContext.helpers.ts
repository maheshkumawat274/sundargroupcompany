import { createContext, useContext } from "react";

export interface User {
  name: string;
  email: string;
}

export const defaultUser: User = {
  name: "Demo User",
  email: "demo@sundarprint.com",
};

export const AuthContext = createContext<{ user: User | null }>({
  user: defaultUser,
});

export const useAuth = () => useContext(AuthContext);
