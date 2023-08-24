import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: {
        favItems: [],
    },
    reducers: {
        addFavsToFavourites(state, action) {

        },
        removeFavsFromFavourites(state, action) {

        },
    },
});

export const favouritesActions = favouritesSlice.actions;

export default favouritesSlice;