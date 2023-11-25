import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    },
    [getPosts.rejected]: () => {
      console.error("response rejected");
    },
  },
});

export default postSlice.reducer;
