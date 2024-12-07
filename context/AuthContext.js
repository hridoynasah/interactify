"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("authData");
    if (storedData) {
      setAuthData(JSON.parse(storedData));
    }
  }, []);

  const login = (userData) => {
    setAuthData(userData);
    localStorage.setItem("authData", JSON.stringify(userData));
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem("authData");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
