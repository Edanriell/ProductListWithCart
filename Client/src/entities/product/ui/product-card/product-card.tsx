import "./product-card.less";

import { FC, ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useAppSelector } from "@shared/lib/hooks";

import { formatNumberToTwoDecimalPlaces } from "../../lib/functions";

import {
	ProductContent,
	ProductImageWrapper,
	ProductName,
	ProductPrice,
	ProductType
} from "./styles.ts";

type ProductProps = {
	index: number;
	id: number;
	image: string;
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

export const ProductCard: FC<ProductProps> = ({
	index,
	id,
	image,
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
		<motion.article
			initial={{ opacity: 0, scale: 0.75 }}
			animate={{ opacity: 1, scale: 1, transition: { delay: index * 0.1 } }}
			className="product"
		>
			<ProductImageWrapper>
				<picture>
					<motion.img
						variants={productImageVariants}
						animate={isProductInCart ? "active" : "inactive"}
						className="product__image"
						src={image}
						alt={name}
					/>
				</picture>
				<AnimatePresence>
					{!isProductInCart && AddToCartButton ? <AddToCartButton /> : null}
					{isProductInCart && CartActionsButton ? <CartActionsButton /> : null}
				</AnimatePresence>
			</ProductImageWrapper>
			<ProductContent>
				<ProductType>{type}</ProductType>
				<ProductName>{name}</ProductName>
				<ProductPrice>${formatNumberToTwoDecimalPlaces(price)}</ProductPrice>
			</ProductContent>
		</motion.article>
	);
};
