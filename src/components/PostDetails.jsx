"use client";

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
  Badge,
  LinearProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CommentIcon from "@mui/icons-material/Comment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useNavBar } from "./NavBar/NavBarContext";
import {
  fetchPostById,
  fetchCommentsByPostId,
  deleteExistingPost,
} from "@/store/operations";
import {
  selectSelectedPost,
  selectLoading,
  selectCommentsByPostId,
} from "@/store/selectors";
import { resetSelectedPost } from "@/store/postsSlice";
import ConfirmDialog from "./ConfirmDialog";
import { PostCommentsDialog } from "./PostCommentsDialog";

export default function PostDetails() {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { setTitle, setActions } = useNavBar();
  const selectedPost = useSelector(selectSelectedPost);
  const loading = useSelector(selectLoading);
  const comments = useSelector(selectCommentsByPostId);

  const [openDelete, setOpenDelete] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  useEffect(() => {
    dispatch(fetchPostById(id));
    dispatch(fetchCommentsByPostId(id));
    return () => dispatch(resetSelectedPost());
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
  }, [comments, id]);

  const handleBack = () => router.push("/posts");
  const handleDelete = () => {
    dispatch(deleteExistingPost(selectedPost.id));
    handleBack();
  };

  if (loading || !selectedPost) {
    return (
      <Box sx={{ mt: 2, px: 2 }}>
        <LinearProgress />
        <Typography sx={{ mt: 2 }}>Loading post details...</Typography>
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
            title={<Typography>{selectedPost.title}</Typography>}
            subheader={`User: ${selectedPost.userId}`}
          />
          <CardContent>
            <Typography variant="body2" color="text.primary">
              {selectedPost.body}
            </Typography>
          </CardContent>
          <CardActions sx={{ gap: 1 }}>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => setOpenDelete(true)}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
            >
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
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={() => {
          handleDelete();
          setOpenDelete(false);
        }}
        title="Delete this post?"
      />
    </>
  );
}
