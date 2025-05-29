"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { rubik } from "@/styles/fonts";

const paletteLight = {
  primary: { main: "#2196f3" },
  secondary: { main: "#8d8d8d" },
  error: { main: "#e21c18" },
  background: {
    default: "#ffffff",
    paper: "#ffffff",
    buttons: "#3f3d3d",
  },
  text: {
    primary: "#090909",
    secondary: "#8d8d8d",
  },
};

const paletteDark = {
  primary: { main: "#2196f3" },
  secondary: { main: "#8d8d8d" },
  error: { main: "#e21c18" },
  background: {
    default: "#090909",
    paper: "#1d1c1c",
    buttons: "#ffffff",
  },
  text: {
    primary: "#ede4e4",
    secondary: "#8d8d8d",
  },
};

const getMuiTheme = (mode) =>
  createTheme({
    cssVarPrefix: "mui",
    palette: mode === "light" ? paletteLight : paletteDark,
    typography: {
      fontFamily: rubik.style.fontFamily,
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.primary,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.text.secondary,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.text.primary,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
            "& input": {
              color: theme.palette.text.primary,
            },
          }),
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.secondary,
          }),
        },
      },
    },
    custom: {
      heroGradient:
        mode === "light"
          ? "linear-gradient(130deg, #cee8f8 20%, #f8d8eb 110%)"
          : "linear-gradient(130deg, #2f3536 35%, #581fa2 110%)",
    },
  });

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const useColorMode = () => useContext(ColorModeContext);

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

  const theme = getMuiTheme(mode);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}
