"use client";
import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function Error({}) {
  return (
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Oops... Something went wrong
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Link href="/">Back to Homepage</Link>
      </Box>
    </Box>
  );
}
