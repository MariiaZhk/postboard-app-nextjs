"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const getMuiTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "var(--background)",
              paper: "var(--background)",
            },
            text: {
              primary: "var(--foreground)",
            },
          }
        : {
            background: {
              default: "var(--background)",
              paper: "var(--background)",
            },
            text: {
              primary: "var(--foreground)",
            },
          }),
    },
    typography: {
      fontFamily: "Rubik, sans-serif",
    },
  });

export function ThemeProvider({ children, ...props }) {
  const theme = getMuiTheme(props.theme);
  return (
    <NextThemesProvider {...props}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </NextThemesProvider>
  );
}
