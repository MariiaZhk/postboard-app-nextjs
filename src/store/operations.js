import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostComments,
  getPostById,
} from "@/services/api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getPosts();
  return posts;
});

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id) => {
    const post = await getPostById(id);
    return post;
  }
);

export const fetchCommentsByPostId = createAsyncThunk(
  "posts/fetchCommentsByPostId",
  async (id) => {
    const comments = await getPostComments(id);
    return comments;
  }
);

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async (post) => {
    const newPost = await createPost(post);
    return newPost;
  }
);

export const updateExistingPost = createAsyncThunk(
  "posts/updateExistingPost",
  async ({ id, post }) => {
    const updatedPost = await updatePost(id, post);
    return updatedPost;
  }
);

export const deleteExistingPost = createAsyncThunk(
  "posts/deleteExistingPost",
  async (id) => {
    await deletePost(id);
    return id;
  }
);
