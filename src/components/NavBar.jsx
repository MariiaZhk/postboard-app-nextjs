import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            DOiT
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
