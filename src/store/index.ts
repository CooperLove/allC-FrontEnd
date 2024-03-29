import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice.ts";
import userReducer from "../reducers/userReducer.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
