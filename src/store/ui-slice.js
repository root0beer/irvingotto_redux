import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { cartOpened: false, favOpened: false },
    reducers: {
        toggle(state, action) {
            state[action.payload] = !state[action.payload];
        },
        heartLikeStatus(state, action) {
            
        }
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;