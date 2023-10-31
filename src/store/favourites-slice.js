import { createSlice } from "@reduxjs/toolkit";
import { addToFav } from "../../lib/addToFav";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favItems: [],
    userId: "",
  },
  reducers: {
    addUserId(state, action) {
      state.userId = action.payload;
    },
    addFavsToFavourites(state, action) {
      const newFavItem = action.payload;
      const existingFavItem = state.favItems.find(
        (item) => item.favItemId === newFavItem.id
      );
      if (!existingFavItem) {
        state.favItems.push({
          favItemId: newFavItem.id,
          favItemImage: newFavItem.productImage,
          favItemImageId: newFavItem.productImageId,
          favItemImageBlur: newFavItem.imageBlur,
          favItemTitle: newFavItem.title,
          favItemPrice: newFavItem.price,
        });
      } else {
        state.favItems = state.favItems.filter(
          (item) => item.favItemId !== newFavItem.id
        );
      }

      const userId = state.userId;
      const products = state.favItems.map((item) => {
        return {
          product: {
            title: item.cartItemTitle,
            favItemId: newFavItem.id,
            favItemImage: newFavItem.productImage,
            favItemImageId: newFavItem.productImageId,
            favItemImageBlur: newFavItem.imageBlur,
          },
        };
      });
    },
    removeFavsFromFavouritesCart(state, action) {
      const id = action.payload;
      state.favItems = state.favItems.filter((item) => item.favItemId !== id);
    },
  },
});

export const favouritesActions = favouritesSlice.actions;

export default favouritesSlice;
