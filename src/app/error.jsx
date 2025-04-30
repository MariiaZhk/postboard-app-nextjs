"use client";
import React from "react";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

export default function Error({}) {
  return (
    <Box sx={{ padding: "4rem", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Oops... Something went wrong
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
