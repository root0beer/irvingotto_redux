import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: {
        favItems: [],
    },
    reducers: {
        addFavsToFavourites(state, action) {
            const newFavItem = action.payload;
            const existingFavItem = state.favItems.find(item => item.favItemId === newFavItem.id);
            if (!existingFavItem) {
                state.favItems.push({
                    favItemId: newFavItem.id,
                    favItemImage: newFavItem.productImage,
                    favItemImageId: newFavItem.productImageId,
                    favItemImageBlur: newFavItem.imageBlur,
                    favItemTitle: newFavItem.title,
                });
            } else {
                state.favItems = state.favItems.filter(item => item.favItemId !== newFavItem.id);
            };
        },
        removeFavsFromFavouritesCart(state, action) {

        },
    },
});

export const favouritesActions = favouritesSlice.actions;

export default favouritesSlice;