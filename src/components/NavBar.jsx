"use client";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useColorMode } from "./ThemeProvider";
import DrawerMenu from "./DrawerMenu";

export default function NavBar() {
  const { toggleColorMode, mode } = useColorMode();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <DrawerMenu />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DOiT MVP
        </Typography>

        <IconButton onClick={toggleColorMode} color="inherit">
          {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
