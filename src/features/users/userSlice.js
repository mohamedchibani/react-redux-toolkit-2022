import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Mohamed",
    },
    {
      id: 3,
      name: "Zaineb",
    },
    {
      id: 2,
      name: "Amine",
    },
  ],
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, { payload }) => {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    },
  },
});

const { deleteUser } = userSlice.actions;

export default userSlice.reducer;
