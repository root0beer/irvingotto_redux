import { createSlice } from "@reduxjs/toolkit";

const receivedCartSlice = createSlice({
  name: "receivedCart",
  initialState: { receivedCartItems: [], priceAll: 0, userId: "" },
  reducers: {
    receiveItemstoCart(state, action) {
      const receivedCartArray = action.payload;
      console.log(receivedCartArray);
      const existingRecCartItem = state.receivedCartItems.find(
        (item) => receivedCartArray.userId === item.recCartUserId
      );
      
      if (!existingRecCartItem) {
        state.receivedCartItems.push({
            recCartId: receivedCartArray.id,
            recCartPriceAll: receivedCartArray.priceAll,
            recCartUserId: receivedCartArray.userId,
            // recCartProds: receivedCartArray.products,
        });
      } else {

      }
      // state.userId = receivedCartArray.userId || state.userId;
      // state.priceAll = receivedCartArray.priceAll || state.priceAll;
      // state.cartItems = receivedCartArray.products || state.cartItems;
      // console.log(state.userId, state.priceAll, state.cartItems, "received Cart Reducer");
    },
  },
});

export const receivedCartActions = receivedCartSlice.actions;

export default receivedCartSlice;
