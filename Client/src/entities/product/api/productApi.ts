import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Product } from "@entities/product/model";

import { apiBaseUrl } from "@shared/api";

type AllProducts = {
	products: Product[];
};

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
	tagTypes: ["Products"],
	endpoints: (builder) => ({
		getProducts: builder.query<AllProducts, void>({
			query: () => "products",
			providesTags: ["Products"]
		}),
		getProductById: builder.query<Product, number>({
			query: (id) => `products/product/${id}`,
			providesTags: (result, error, id) => [{ type: "Products", id }]
		}),
		addProduct: builder.mutation<Product, Partial<Product>>({
			query: (newProduct) => ({
				url: "products",
				method: "POST",
				body: newProduct
			}),
			invalidatesTags: ["Products"]
		}),
		updateProduct: builder.mutation<Product, { updatedProduct: Partial<Product> }>({
			query: ({ updatedProduct }) => ({
				url: `products`,
				method: "PUT",
				body: updatedProduct
			}),
			invalidatesTags: (result, error) => [{ type: "Products" }]
		}),
		removeProduct: builder.mutation<{ success: boolean; id: number }, number>({
			query: (id) => ({
				url: `products/product/${id}`,
				method: "DELETE"
			}),
			invalidatesTags: (result, error, id) => [{ type: "Products", id }]
		})
	})
});

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useAddProductMutation,
	useRemoveProductMutation,
	useUpdateProductMutation
} = productsApi;
