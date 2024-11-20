import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    id: "",
  },
  reducers: {
    userName: (state, action) => {
      state.name = action.payload;
    },
    userId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { userName, userId, deposit } = userSlice.actions;

export default userSlice.reducer;
