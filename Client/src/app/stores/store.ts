import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "@features/cart/model";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartSlice.reducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
