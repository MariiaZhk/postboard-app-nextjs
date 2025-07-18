import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
  createNewPost,
  updateExistingPost,
  deleteExistingPost,
  fetchPostById,
} from "./operations";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    selectedPost: null,
    loading: false,
    error: null,
  },
  reducers: {
    selectPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
        state.loading = false;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createNewPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.loading = false;
      })
      .addCase(createNewPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateExistingPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateExistingPost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateExistingPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(deleteExistingPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExistingPost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteExistingPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { selectPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
