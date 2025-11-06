import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "", isLoggedIn: false });
  
  const login = (name) => setUser({ name, isLoggedIn: true });
  const logout = () => setUser({ name: "", isLoggedIn: false });
  
  const [darkMode ,setDarkMode] = useState(true)
 const toolTheme = () => setDarkMode((pre)=> !pre); 

  return (
    <UserContext.Provider value={{ user, login, logout , darkMode , toolTheme}}>
      {children}
    </UserContext.Provider>
  );
}
