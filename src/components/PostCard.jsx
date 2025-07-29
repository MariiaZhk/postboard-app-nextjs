"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions as MuiDialogActions,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteExistingPost } from "@/store/operations";
import ConfirmDialog from "./ConfirmDialog";

export default function PostCard({ post }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteClick = (e) => {
    e.currentTarget.blur();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleConfirmDelete = () => {
    dispatch(deleteExistingPost(post.id));
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: theme.palette.background.paper,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>
              {post.title.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              onClick={handleDeleteClick}
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          }
          title={
            <Typography
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {post.title}
            </Typography>
          }
          subheader={
            <Typography color="text.secondary">{`User: ${post.userId}`}</Typography>
          }
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body2" color="text.primary">
            {post.body.slice(0, 100)}...
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            component={Link}
            href={`/posts/${post.id}`}
            aria-label="read more"
            color="text.primary"
          >
            <ArrowForwardIcon />
          </Button>
        </CardActions>
      </Card>

      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          dispatch(deleteExistingPost(post.id));
          setOpen(false);
        }}
        title="Delete this post?"
      />
    </>
  );
}
