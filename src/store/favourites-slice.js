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
                    favItemPrice: newFavItem.price,
                    favItemLiked: true,
                });
            } else {
                state.favItems = state.favItems.filter(item => item.favItemId !== newFavItem.id);
            };
        },
        removeFavsFromFavouritesCart(state, action) {
            const id = action.payload;
            state.favItems = state.favItems.filter(item => item.favItemId !== id);
            const favouritedItem = state.favItems.find(item => item.favItemId === id);
            if (favouritedItem) {
                favouritedItem.favItemLiked = !favItem.favItemLiked;
            };
        },
        toggleLikeStatus(state, action) {
            const id = action.payload;
            const favouritedItem = state.favItems.find(item => item.favItemId === id);
            if (favouritedItem) {
                favouritedItem.favItemLiked = !favItem.favItemLiked;
            };
        },
    },
});

export const favouritesActions = favouritesSlice.actions;

export default favouritesSlice;