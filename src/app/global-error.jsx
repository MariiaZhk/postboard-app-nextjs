"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function GlobalError({ error, reset }) {
  console.log("Global error component loaded");
  return (
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Internal Error
      </Typography>
      <Typography variant="body1" component="p">
        {error?.message || "A critical error has occurred."}
      </Typography>
      <Button variant="contained" onClick={reset} sx={{ marginTop: 2 }}>
        Try Again
      </Button>
    </Box>
  );
}
