import { createSlice } from "@reduxjs/toolkit";

const receivedCartSlice = createSlice({
  name: "receivedCart",
  initialState: { cartItems: [], priceAll: 0, userId: "" },
  reducers: {
    receiveItemstoCart(state, action) {
        const receivedCartArray = action?.payload;
        state.userId = receivedCartArray?.userId;
        state.priceAll = receivedCartArray?.priceAll;
        state.cartItems = receivedCartArray?.products;
        console.log(state.userId, state.priceAll, state.cartItems, "received Cart Reducer");
    },
  }
});

export const receivedCartActions = receivedCartSlice.actions;

export default receivedCartSlice;
