import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newCartItem = action.payload;
            const existingCartItem = state.cartItems.find(item => item.id === newCartItem.id);
            if (!existingCartItem) {
                //push manipulates the existing array in the existing state
                //BUT redux toolkit assures that we will not manipulate the existing state,
                //so, we can write it simply like this, with push();
                state.cartItems.push({
                    cartItemId: newCartItem.id,
                    cartItemPrice: newCartItem.price,
                    //since we are adding it for the first time, its 1:
                    cartItemQuantity: 1,
                    //since we are adding it for the first time, total price is just price:
                    totalCartPrice: newCartItem.price,
                    cartItemTitle: newCartItem.title,
                });
            } else {
                existingCartItem.cartItemQuantity++;
                existingCartItem.totalCartPrice = existingCartItem.totalCartPrice + newCartItem.cartItemPrice;
            }
        },
        removeItemFromCart() {},
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;