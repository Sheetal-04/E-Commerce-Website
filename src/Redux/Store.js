import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlice";

const Store = configureStore({
	reducer: {
		cart: CartSlice.reducer,
	},
});
export default Store;
