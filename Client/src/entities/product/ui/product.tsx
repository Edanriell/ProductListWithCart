import "./styles.less";

import { FC, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useAppSelector } from "@shared/lib/hooks";

import { formatNumberToTwoDecimalPlaces } from "../lib/functions";

import {
	ProductContent,
	ProductImageWrapper,
	ProductName,
	ProductPrice,
	ProductStyled,
	ProductType
} from "./styles.ts";

type ProductProps = {
	id: number;
	imageUrl: string;
	type: string;
	name: string;
	price: number;
	AddToCartButton?: () => ReactNode;
	CartActionsButton?: () => ReactNode;
};

const productImageVariants = {
	active: {
		border: "2px solid #c73b0f"
	},
	inactive: {
		border: "2px solid #fcf8f6"
	}
};

export const Product: FC<ProductProps> = ({
	id,
	imageUrl,
	type,
	name,
	price,
	AddToCartButton,
	CartActionsButton
}) => {
	const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
	const cartProducts = useAppSelector((state) => state.cart);

	useEffect(() => {
		const currentProductIndex = cartProducts.products.findIndex((product) => product.id === id);

		if (currentProductIndex !== -1) {
			setIsProductInCart(true);
		} else {
			setIsProductInCart(false);
		}
	}, [cartProducts, id]);

	return (
		<ProductStyled>
			<ProductImageWrapper>
				<picture>
					<motion.img
						variants={productImageVariants}
						animate={isProductInCart ? "active" : "inactive"}
						className="product-image"
						src={imageUrl}
						alt={name}
					/>
				</picture>
				{!isProductInCart && AddToCartButton ? <AddToCartButton /> : null}
				{isProductInCart && CartActionsButton ? <CartActionsButton /> : null}
			</ProductImageWrapper>
			<ProductContent>
				<ProductType>{type}</ProductType>
				<ProductName>{name}</ProductName>
				<ProductPrice>${formatNumberToTwoDecimalPlaces(price)}</ProductPrice>
			</ProductContent>
		</ProductStyled>
	);
};
