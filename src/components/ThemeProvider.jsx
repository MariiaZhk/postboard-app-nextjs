"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { rubik } from "@/styles/fonts";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const useColorMode = () => useContext(ColorModeContext);

const getMuiTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#2196f3" },
      secondary: { main: "#96000f" },
      background: {
        default: mode === "light" ? "#ffffff" : "#292525",
        paper: mode === "light" ? "#ffffff" : "#292525",
      },
      text: {
        primary: mode === "light" ? "rgba(0, 0, 0, 0.87)" : "#ffffff",
      },
    },
    typography: {
      fontFamily: rubik.style.fontFamily,
    },

    custom: {
      heroGradient:
        mode === "light"
          ? "linear-gradient(130deg, #cee8f8 20%, #f8d8eb 110%)"
          : "linear-gradient(130deg, #2f3536 35%, #581fa2 110%)",
    },
  });

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setMode(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getMuiTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}
