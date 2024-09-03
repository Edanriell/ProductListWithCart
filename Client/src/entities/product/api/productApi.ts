// Correct import for auto generated hooks !
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "@entities/product/model";

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
	tagTypes: ["Products"],
	endpoints: (builder) => ({
		getProducts: builder.query<Product[], void>({
			query: () => "products",
			providesTags: ["Products"]
		}),
		getProductById: builder.query<Product, number>({
			query: (id) => `products/${id}`,
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
		removeProduct: builder.mutation<{ success: boolean; id: number }, number>({
			query: (id) => ({
				url: `products/${id}`,
				method: "DELETE"
			}),
			invalidatesTags: (result, error, id) => [{ type: "Products", id }]
		}),
		updateProduct: builder.mutation<Product, { id: number; updatedProduct: Partial<Product> }>({
			query: ({ id, updatedProduct }) => ({
				url: `products/${id}`,
				method: "PUT",
				body: updatedProduct
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Products", id }]
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
