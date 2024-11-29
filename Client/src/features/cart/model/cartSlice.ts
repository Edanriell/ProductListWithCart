import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@app/stores";

import type { Product } from "@entities/product/model";

type CartProduct = Product & { count: number };

type CartState = {
	products: CartProduct[];
};

const initialState: CartState = {
	products: JSON.parse(localStorage.getItem("cart") || "[]") // Initialize from localStorage
};

const updateLocalStorage = (cart: CartProduct[]) => {
	localStorage.setItem("cart", JSON.stringify(cart));
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state: CartState, action: PayloadAction<Product>) => {
			const product = state.products.find((p) => p.id === action.payload.id);

			if (!product) {
				const newProduct = { ...action.payload, count: 1 };
				state.products.push(newProduct);

				updateLocalStorage(state.products);
			}

			// return {
			// 	...state,
			// 	products: [...state.products, { ...action.payload, count: 1 }]
			// };
		},
		removeFromCart: (state: CartState, action: PayloadAction<{ id: number }>) => {
			state.products = state.products.filter((product) => product.id !== action.payload.id);

			updateLocalStorage(state.products);

			// return {
			// 	...state,
			// 	products: state.products.filter((product-card: CartProduct) => product-card.id !== action.payload.id)
			// };
		},
		clearCart: (state: CartState, action: PayloadAction<void>) => {
			state.products = [];
			localStorage.removeItem("cart");
		},
		incrementProductCount: (state: CartState, action: PayloadAction<{ id: number }>) => {
			const product = state.products.find((p) => p.id === action.payload.id);

			if (product) {
				product.count += 1;
				updateLocalStorage(state.products);
			}

			// return {
			// 	...state,
			// 	products: state.products.map((product) =>
			// 		product.id === action.payload.id ? { ...product, count: product.count + 1 } : product
			// 	)
			// };
		},
		decrementProductCount: (state: CartState, action: PayloadAction<{ id: number }>) => {
			const product = state.products.find((p) => p.id === action.payload.id);

			if (product) {
				if (product.count > 1) {
					product.count -= 1;
				} else {
					state.products = state.products.filter((p) => p.id !== action.payload.id);
				}
				updateLocalStorage(state.products);
			}

			// if (product) {
			// 	if (product.count > 1) {
			// 		return {
			// 			...state,
			// 			products: state.products.map((p) =>
			// 				p.id === action.payload.id ? { ...p, count: p.count - 1 } : p
			// 			)
			// 		};
			// 	} else {
			// 		return {
			// 			...state,
			// 			products: state.products.filter((p) => p.id !== action.payload.id)
			// 		};
			// 	}
			// }
			//
			// return state;
		}
	}
});

export const {
	addToCart,
	removeFromCart,
	clearCart,
	incrementProductCount,
	decrementProductCount
} = cartSlice.actions;

export const totalProductsCount = (state: RootState) =>
	state.cart.products.reduce((total: number, product: CartProduct) => total + product.count, 0);
