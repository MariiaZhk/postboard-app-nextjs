import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./postsSlice";

export const store = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
    },
  });
};
