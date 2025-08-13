"use client";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  Button,
  Badge,
  LinearProgress,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CommentIcon from "@mui/icons-material/Comment";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useNavBar } from "./NavBar/NavBarContext";
import {
  deleteExistingPost,
  fetchCommentsByPostId,
  fetchPostById,
} from "@/store/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedPost,
  selectLoading,
  selectCommentsByPostId,
} from "@/store/selectors";
import { resetSelectedPost } from "@/store/postsSlice";
import ConfirmDialog from "./ConfirmDialog";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PostCommentsDialog } from "./PostCommentsDialog";

export default function PostDetails() {
  const router = useRouter();
  const { id } = useParams();
  const { setTitle, setActions } = useNavBar();
  const dispatch = useDispatch();
  const selectedPost = useSelector(selectSelectedPost);
  const loading = useSelector(selectLoading);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const comments = useSelector(selectCommentsByPostId);

  useEffect(() => {
    dispatch(fetchPostById(id));
    dispatch(fetchCommentsByPostId(id));
    return () => {
      dispatch(resetSelectedPost());
    };
  }, [id]);

  useEffect(() => {
    setTitle(`Post #${id}`);
    setActions(
      <IconButton color="inherit" onClick={() => setOpenComments(true)}>
        <Badge badgeContent={comments.length} color="error">
          <CommentIcon />
        </Badge>
      </IconButton>
    );
    return () => {
      setTitle("DOiT MVP");
      setActions(null);
    };
  }, [id, comments]);

  const handleBack = () => router.push("/posts");

  const handleDelete = () => {
    dispatch(deleteExistingPost(selectedPost.id));
    handleBack();
  };

  if (loading || !selectedPost) {
    return (
      <Box sx={{ mt: 2 }}>
        <LinearProgress />
        <Typography sx={{ mt: 2, px: 2 }}>Loading post details...</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ maxWidth: 1440, mx: "auto", px: 2, mt: 2 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "secondary.main" }}>
                {selectedPost.title.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={selectedPost.title}
            subheader={`User: ${selectedPost.userId}`}
          />
          <CardContent>
            <Typography variant="body1">{selectedPost.body}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="error"
              onClick={() => setOpenDeleteDialog(true)}
              sx={{
                gap: 1,
              }}
            >
              <DeleteIcon />
              Delete
            </Button>

            <Button
              variant="outlined"
              onClick={handleBack}
              sx={{
                gap: 1,
              }}
            >
              <ArrowBackIcon />
              To Posts List
            </Button>
          </CardActions>
        </Card>
      </Box>

      <PostCommentsDialog
        id={selectedPost.id}
        open={openComments}
        onClose={() => setOpenComments(false)}
      />

      <ConfirmDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={() => {
          handleDelete();
          setOpenDeleteDialog(false);
        }}
        title="Delete this post?"
      />
    </>
  );
}
