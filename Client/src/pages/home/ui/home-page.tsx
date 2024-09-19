import { FC } from "react";

import { ProductCard } from "@entities/product/ui/product-card";
import { useGetProductsQuery } from "@entities/product/api";
import { convertBase64ToImageUrl } from "@entities/product/lib/functions";

import { Cart } from "@features/cart/ui/cart";
import { AddToCartButton } from "@features/cart/ui/add-to-cart-button";
import { CartActionsButton } from "@features/cart/ui/cart-actions-button";

import { MainLayout } from "@widgets/layouts/main/ui";

import { Loader } from "@shared/ui/loader";
import { Error } from "@shared/ui/error";
import { apiUse } from "@shared/config";

import {
	HomePageContent,
	HomePageMainContent,
	HomePageProductList,
	HomePageProductListItem,
	HomePageStyled,
	HomePageTitle
} from "./styles";
import { AnimatePresence } from "framer-motion";

const products = [
	{
		id: 1,
		image: "/images/raster/products/waffle-with-berries.jpg",
		type: "Waffle",
		name: "Waffle with Berries",
		price: 6.5
	},
	{
		id: 2,
		image: "/images/raster/products/vanilla-bean-creme-brulee.jpg",
		type: "Crème Brûlée",
		name: "Vanilla Bean Crème Brûlée",
		price: 7.0
	},
	{
		id: 3,
		image: "/images/raster/products/macaron-mix-of-five.jpg",
		type: "Macaron",
		name: "Macaron Mix of Five",
		price: 8.0
	},
	{
		id: 4,
		image: "/images/raster/products/classic-tiramisu.jpg",
		type: "Tiramisu",
		name: "Classic Tiramisu",
		price: 5.5
	},
	{
		id: 5,
		image: "/images/raster/products/pistachio-baklava.jpg",
		type: "Baklava",
		name: "Pistachio Baklava",
		price: 4.0
	},
	{
		id: 6,
		image: "/images/raster/products/lemon-meringue-pie.jpg",
		type: "Pie",
		name: "Lemon Meringue Pie",
		price: 5.0
	},
	{
		id: 7,
		image: "/images/raster/products/red-velvet-cake.jpg",
		type: "Cake",
		name: "Red Velvet Cake",
		price: 4.5
	},
	{
		id: 8,
		image: "/images/raster/products/salted-caramel-brownie.jpg",
		type: "Brownie",
		name: "Salted Caramel Brownie",
		price: 5.5
	},
	{
		id: 9,
		image: "/images/raster/products/vanilla-panna-cotta.jpg",
		type: "Panna Cotta",
		name: "Vanilla Panna Cotta",
		price: 6.5
	}
];

export const HomePage: FC = () => {
	const { isLoading, isError, data } = useGetProductsQuery();

	const renderProductsFromDataBase = () => {
		return data?.products.map(({ id, name, image, price, type }, index) => (
			<HomePageProductListItem key={name + "-" + id + "-" + index}>
				<ProductCard
					index={index}
					id={id}
					image={convertBase64ToImageUrl(image, "jpg")}
					name={name}
					type={type}
					price={price}
					AddToCartButton={() =>
						AddToCartButton({
							id,
							image: convertBase64ToImageUrl(image, "jpg"),
							type,
							name,
							price
						})
					}
					CartActionsButton={() => CartActionsButton({ id, name })}
				/>
			</HomePageProductListItem>
		));
	};

	const renderProductsFromLocalDataBase = () => {
		return products.map(({ id, image, type, name, price }, index) => (
			<HomePageProductListItem key={name + "-" + id + "-" + index}>
				<ProductCard
					index={index}
					id={id}
					image={image}
					name={name}
					type={type}
					price={price}
					AddToCartButton={() => AddToCartButton({ id, image, type, name, price })}
					CartActionsButton={() => CartActionsButton({ id, name })}
				/>
			</HomePageProductListItem>
		));
	};

	return (
		<MainLayout>
			<HomePageStyled>
				<HomePageContent>
					<HomePageMainContent>
						<HomePageTitle>Desserts</HomePageTitle>
						{apiUse && (
							<AnimatePresence mode="wait">
								{isLoading && <Loader />}
								{isError && <Error>Could not load products</Error>}
								{data && data.products.length >= 1 && (
									<HomePageProductList>{renderProductsFromDataBase()}</HomePageProductList>
								)}
							</AnimatePresence>
						)}
						{!apiUse && (
							<HomePageProductList>{renderProductsFromLocalDataBase()}</HomePageProductList>
						)}
					</HomePageMainContent>
					<Cart />
				</HomePageContent>
			</HomePageStyled>
		</MainLayout>
	);
};
