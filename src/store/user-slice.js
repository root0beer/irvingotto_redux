import { createSlice } from "@reduxjs/toolkit";
import { addToOrder } from "../../lib/addToOrder";

const userSlice = createSlice({
  name: "user",
  initialState: { userId: "" },
  reducers: {
    addUserId(state, action) {
      state.userId = action.payload;

      // const priceAll = 0;
      // const orderSent = false;
      // const userId = state.userId;

      // const products = [];
      // addToOrder({
      //   orderSent,
      //   userId,
      //   priceAll,
      //   products,
      // });
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
