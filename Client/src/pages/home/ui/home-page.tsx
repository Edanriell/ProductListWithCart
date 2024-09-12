import { FC } from "react";

import { ProductCard } from "@entities/product/ui/product-card";

import { Cart } from "@features/cart/ui/cart";
import { AddToCartButton } from "@features/cart/ui/add-to-cart-button";
import { CartActionsButton } from "@features/cart/ui/cart-actions-button";

import { MainLayout } from "@widgets/layouts/main/ui";

import {
	HomePageContent,
	HomePageMainContent,
	HomePageProductList,
	HomePageProductListItem,
	HomePageStyled,
	HomePageTitle
} from "./styles";

const products = [
	{
		id: 1,
		imageUrl: "/images/raster/products/waffle-with-berries.jpg",
		type: "Waffle",
		name: "Waffle with Berries",
		price: 6.5
	},
	{
		id: 2,
		imageUrl: "/images/raster/products/vanilla-bean-creme-brulee.jpg",
		type: "Crème Brûlée",
		name: "Vanilla Bean Crème Brûlée",
		price: 7.0
	},
	{
		id: 3,
		imageUrl: "/images/raster/products/macaron-mix-of-five.jpg",
		type: "Macaron",
		name: "Macaron Mix of Five",
		price: 8.0
	},
	{
		id: 4,
		imageUrl: "/images/raster/products/classic-tiramisu.jpg",
		type: "Tiramisu",
		name: "Classic Tiramisu",
		price: 5.5
	},
	{
		id: 5,
		imageUrl: "/images/raster/products/pistachio-baklava.jpg",
		type: "Baklava",
		name: "Pistachio Baklava",
		price: 4.0
	},
	{
		id: 6,
		imageUrl: "/images/raster/products/lemon-meringue-pie.jpg",
		type: "Pie",
		name: "Lemon Meringue Pie",
		price: 5.0
	},
	{
		id: 7,
		imageUrl: "/images/raster/products/red-velvet-cake.jpg",
		type: "Cake",
		name: "Red Velvet Cake",
		price: 4.5
	},
	{
		id: 8,
		imageUrl: "/images/raster/products/salted-caramel-brownie.jpg",
		type: "Brownie",
		name: "Salted Caramel Brownie",
		price: 5.5
	},
	{
		id: 9,
		imageUrl: "/images/raster/products/vanilla-panna-cotta.jpg",
		type: "Panna Cotta",
		name: "Vanilla Panna Cotta",
		price: 6.5
	}
];

export const HomePage: FC = () => {
	const renderProducts = () => {
		return products.map(({ id, imageUrl, type, name, price }, index) => (
			<HomePageProductListItem key={name + "-" + id + "-" + index}>
				<ProductCard
					index={index}
					id={id}
					imageUrl={imageUrl}
					name={name}
					type={type}
					price={price}
					AddToCartButton={() => AddToCartButton({ id, imageUrl, type, name, price })}
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
						<HomePageProductList>{renderProducts()}</HomePageProductList>
					</HomePageMainContent>
					<Cart />
				</HomePageContent>
			</HomePageStyled>
		</MainLayout>
	);
};
