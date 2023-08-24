import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { cartOpened: false, favOpened: false },
    reducers: {
        toggle(state) {
            state.cartOpened = !state.cartOpened;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;