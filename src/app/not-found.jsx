import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box sx={{ padding: "4rem", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" component="p">
        The page you're looking for doesn’t exist.
      </Typography>

      <Box sx={{ marginTop: 4 }}>
        <Button
          component={Link}
          href="/"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          Go Back Home
        </Button>
      </Box>
    </Box>
  );
}
