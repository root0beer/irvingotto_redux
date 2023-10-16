import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import favouritesSlice from "./favourites-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer, favourites: favouritesSlice.reducer, user: userSlice.reducer },
});

export default store;