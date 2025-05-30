"use client";

import { Box } from "@mui/material";
import PostsList from "@/components/PostsList";

export default function PostsPage() {
  return (
    <Box sx={{ px: 16, py: 3, mx: "auto" }}>
      <PostsList />
    </Box>
  );
}
