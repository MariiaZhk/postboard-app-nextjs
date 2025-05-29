"use client";

import { useState } from "react";
import { Box, Drawer, IconButton, Button, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export default function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        onClick={toggleDrawer}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 340,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <Button
            component={Link}
            href="/"
            color="buttons"
            startIcon={<HomeIcon />}
            sx={{
              textTransform: "none",
              width: "100%",
              justifyContent: "flex-start",
            }}
            onClick={handleLinkClick}
          >
            Home
          </Button>

          <Button
            component={Link}
            href="/posts"
            color="buttons"
            startIcon={<FormatListBulletedIcon />}
            sx={{
              textTransform: "none",
              width: "100%",
              justifyContent: "flex-start",
            }}
            onClick={handleLinkClick}
          >
            View Posts
          </Button>

          <Button
            component={Link}
            href="/posts/create"
            color="buttons"
            sx={{
              textTransform: "none",
              width: "100%",
              justifyContent: "flex-start",
            }}
            startIcon={
              <AddIcon
                sx={{
                  backgroundColor: theme.palette.background.buttons,
                  color: theme.palette.background.paper,
                  borderRadius: "50%",
                }}
              />
            }
            onClick={handleLinkClick}
          >
            Create Post
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
