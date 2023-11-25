import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export default store;
