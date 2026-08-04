import { createContext, useContext, useState } from "react";

// 1. Create the empty "box"
const AuthContext = createContext();

// 2. Create the provider
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: "Guest", isAuthenticated: false });

  const login = () => {
    const name = prompt("What's your name?");
    if (!name) return;
    setUser({ name: name, isAuthenticated: true });
  };

  const logout = () => {
    setUser({ name: "Guest", isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
