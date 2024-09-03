import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@app/stores";

import type { Product } from "@entities/product/model";

type CartProduct = Product & { count: number };

type CartState = {
	products: CartProduct[];
};

const initialState: CartState = {
	products: []
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state: CartState, action: PayloadAction<CartProduct>) => {
			const product = state.products.find((product) => product.id === action.payload.id);

			if (!product) {
				state.products.push({ ...action.payload, count: 1 });
			}
		},
		removeFromCart: (state: CartState, action: PayloadAction<{ id: number }>) => {
			state.products = state.products.filter(
				(product: CartProduct) => product.id !== action.payload.id
			);
		},
		incrementProductCount: (state: CartState, action: PayloadAction<{ id: number }>) => {
			const product = state.products.find((product) => product.id === action.payload.id);

			if (product) {
				product.count += 1;
			}
		},
		decrementProductCount: (state: CartState, action: PayloadAction<{ id: number }>) => {
			const product = state.products.find((product) => product.id === action.payload.id);

			if (product) {
				if (product.count > 1) {
					product.count -= 1;
				} else {
					state.products = state.products.filter((product) => product.id !== action.payload.id);
				}
			}
		}
	}
});

export const { addToCart, removeFromCart, incrementProductCount, decrementProductCount } =
	cartSlice.actions;

export const totalProductsCount = (state: RootState) =>
	state.cart.products.reduce((total: number, product: CartProduct) => total + product.count, 0);
