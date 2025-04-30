import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
  createNewPost,
  updateExistingPost,
  deleteExistingPost,
} from "./operations";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload || [];
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createNewPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
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
        const index = state.items.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
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
        state.items = state.items.filter((post) => post.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteExistingPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

const postsReducer = postsSlice.reducer;
export default postsReducer;
