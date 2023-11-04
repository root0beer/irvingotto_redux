import { createSlice } from "@reduxjs/toolkit";
import { addToFav } from "../../lib/addToFav";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favItems: [],
    userId: "",
  },
  reducers: {
    setFavItems(state, action) {
      state.favItems = action.payload;
    },
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
            productId: item.favItemId,
            title: item.favItemTitle,
            price: item.favItemPrice,
            productImageId: item.favItemImageId,
            productImage: item.favItemImage,
            productImageBlur: item.favItemImageBlur,
          },
        };
      });

      addToFav({
        userId,
        products,
      });
    },
    removeFavsFromFavouritesCart(state, action) {
      const id = action.payload;
      state.favItems = state.favItems.filter((item) => item.favItemId !== id);

      const userId = state.userId;
      const products = state.favItems.map((item) => {
        return {
          product: {
            productId: item.favItemId,
            title: item.favItemTitle,
            productImageId: item.favItemImageId,
            productImage: item.favItemImage,
            productImageBlur: item.favItemImageBlur,
          },
        };
      });

      addToFav({
        userId,
        products,
      });
    },
  },
});

export const favouritesActions = favouritesSlice.actions;

export default favouritesSlice;
