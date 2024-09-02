import { FC } from "react";

import { Product } from "@entities/product/ui";

import { Cart } from "@features/cart/ui";

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
		imageUrl: "/images/raster/products/waffle-with-berries.jpg",
		type: "Waffle",
		name: "Waffle with Berries",
		price: 6.5
	},
	{
		imageUrl: "/images/raster/products/vanilla-bean-creme-brulee.jpg",
		type: "Crème Brûlée",
		name: "Vanilla Bean Crème Brûlée",
		price: 7.0
	},
	{
		imageUrl: "/images/raster/products/macaron-mix-of-five.jpg",
		type: "Macaron",
		name: "Macaron Mix of Five",
		price: 8.0
	},
	{
		imageUrl: "/images/raster/products/classic-tiramisu.jpg",
		type: "Tiramisu",
		name: "Classic Tiramisu",
		price: 5.5
	},
	{
		imageUrl: "/images/raster/products/pistachio-baklava.jpg",
		type: "Baklava",
		name: "Pistachio Baklava",
		price: 4.0
	},
	{
		imageUrl: "/images/raster/products/lemon-meringue-pie.jpg",
		type: "Pie",
		name: "Lemon Meringue Pie",
		price: 5.0
	},
	{
		imageUrl: "/images/raster/products/red-velvet-cake.jpg",
		type: "Cake",
		name: "Red Velvet Cake",
		price: 4.5
	},
	{
		imageUrl: "/images/raster/products/salted-caramel-brownie.jpg",
		type: "Brownie",
		name: "Salted Caramel Brownie",
		price: 5.5
	},
	{
		imageUrl: "/images/raster/products/vanilla-panna-cotta.jpg",
		type: "Panna Cotta",
		name: "Vanilla Panna Cotta",
		price: 6.5
	}
];

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<HomePageStyled>
				<HomePageContent>
					<HomePageMainContent>
						<HomePageTitle>Desserts</HomePageTitle>
						<HomePageProductList>
							{products.map(({ imageUrl, type, name, price }, index) => (
								<HomePageProductListItem key={name + "-" + index}>
									<Product imageUrl={imageUrl} name={name} type={type} price={price} />
								</HomePageProductListItem>
							))}
						</HomePageProductList>
					</HomePageMainContent>
					<Cart />
				</HomePageContent>
			</HomePageStyled>
		</MainLayout>
	);
};

// TODO
// Tablet Product card
// Tablet cart
// Tablet home page
