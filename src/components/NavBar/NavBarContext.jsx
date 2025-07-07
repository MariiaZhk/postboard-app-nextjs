"use client";
import { createContext, useContext, useState } from "react";

const NavBarContext = createContext();

export const useNavBar = () => useContext(NavBarContext);

export function NavBarProvider({ children }) {
  const [title, setTitle] = useState("DOiT MVP");
  const [actions, setActions] = useState(null);

  return (
    <NavBarContext.Provider value={{ title, setTitle, actions, setActions }}>
      {children}
    </NavBarContext.Provider>
  );
}
