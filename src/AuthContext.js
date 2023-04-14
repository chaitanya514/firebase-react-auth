import Reaact, { createContext, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}
