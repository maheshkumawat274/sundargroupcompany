import React from "react";
import { AuthContext, defaultUser } from "./AuthContext.helpers";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider
      value={{
        user: defaultUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
