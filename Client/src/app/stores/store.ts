import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "@entities/product/api";

import { cartSlice } from "@features/cart/model";

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		[productsApi.reducerPath]: productsApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
