"use client";
import { Box, Snackbar, Alert, Container, Paper } from "@mui/material";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { createNewPost } from "@/store/operations";
import CreatePostStepper from "@/components/CreatePostStepper";

export default function CreatePostsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);

  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(createNewPost({ title, body }));
    setSnackOpen(true);
    setTitle("");
    setBody("");
  };

  return (
    <Box>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper sx={{ p: 3, borderRadius: 3 }}>
          <CreatePostStepper
            title={title}
            setTitle={setTitle}
            body={body}
            setBody={setBody}
            onFinish={handleCreate}
          />
        </Paper>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Post created successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
