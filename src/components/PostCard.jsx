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
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDeleteClick = (e) => {
    e.currentTarget.blur();
    setOpen(true);
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
          subheader={`User: ${post.userId}`}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {post.body}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            component={Link}
            href={`/posts/${post.id}`}
            startIcon={<ArrowForwardIcon />}
          >
            Read more
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
