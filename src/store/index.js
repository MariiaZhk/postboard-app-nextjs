import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { postsReducer } from "./postsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["posts"],
};

const persistedPostsReducer = persistReducer(persistConfig, postsReducer);

export const store = configureStore({
  reducer: {
    posts: persistedPostsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
