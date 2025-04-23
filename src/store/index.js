import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import postsReducer from "./postsSlice";

export const store = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      posts: postsReducer,
    },
  });
};
