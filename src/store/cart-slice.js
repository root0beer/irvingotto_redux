import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    //here we basically state what we want to display on the screen :\ in simpler terms
    initialState: {
        cartItems: [],
        totalPrice: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newCartItem = action.payload;
            const existingCartItem = state.cartItems.find(item => item.cartItemId === newCartItem.id);
           if (!existingCartItem) {
                //push manipulates the existing array in the existing state
                //BUT redux toolkit assures that we will not manipulate the existing state,
                //so, we can write it simply like this, with push();
                state.cartItems.push({
                    cartItemId: newCartItem.id,
                    cartItemPrice: newCartItem.price,
                    cartItemImage: newCartItem.productImage,
                    cartItemImageId: newCartItem.productImageId,
                    cartItemImageBlur: newCartItem.imageBlur,
                    //since we are adding it for the first time, its 1:
                    cartItemQuantity: 1,
                    cartItemTitle: newCartItem.title,
                });
            } else {
                existingCartItem.cartItemQuantity++;
            }
            //calculating the totalPrice
            state.totalPrice = state.cartItems.reduce((total, item) => total + item.cartItemPrice * item.cartItemQuantity, 0);
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            //we are finding that item and remembering it in the existingCartItem
            const existingCartItem = state.cartItems.find(item => item.cartItemId === id);
            //if the quantity of the item is 1 we want to remove it entirely
            //if its greater than 1, we watnt to reduce the quantity by 1:
            state.totalPrice = state.totalPrice - state.cartItems.cartItemPrice;
            if (existingCartItem.cartItemQuantity === 1) {
                //we are filtering all the items out where item id is NOT equal to the id,
                //we keeping all the items where id's didnt match
                state.cartItems = state.cartItems.filter(item => item.cartItemId !== id);
            } else {
                existingCartItem.cartItemQuantity--;
            }
            //calculating the totalPrice
            state.totalPrice = state.cartItems.reduce((total, item) => total + item.cartItemPrice * item.cartItemQuantity, 0);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;