import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userId: "" },
  reducers: {
    addUserId(state, action) {
      const newUserId = action.payload;
      state.initialState.userId = newUserId;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
