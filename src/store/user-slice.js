import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userId: "" },
  reducers: {
    addUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
