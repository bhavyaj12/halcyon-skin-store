import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    token: "",
    user: "",
  });

  useEffect(() => {
    setAuth({
      isAuth: JSON.parse(localStorage.getItem("HALCYON_AUTH_TOKEN"))
        ? true
        : false,
      token: JSON.parse(localStorage.getItem("HALCYON_AUTH_TOKEN")),
      user: JSON.parse(localStorage.getItem("halcyon_username")),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
