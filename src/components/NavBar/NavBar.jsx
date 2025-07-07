"use client";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useColorMode } from "../ThemeProvider";
import DrawerMenu from "../DrawerMenu";
import { useNavBar } from "./NavBarContext";

export default function NavBar() {
  const { toggleColorMode, mode } = useColorMode();
  const { title, actions } = useNavBar();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <DrawerMenu />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {actions}
          <IconButton onClick={toggleColorMode} color="inherit">
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
