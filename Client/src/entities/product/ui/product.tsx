import "./styles.less";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useAppDispatch, useAppSelector, useRenderCount } from "@shared/lib/hooks";

import { Icon, IconType } from "@shared/ui/icon";

import { formatNumberToTwoDecimalPlaces } from "../lib/functions";

import {
	ProductContent,
	ProductImage,
	ProductImageWrapper,
	ProductName,
	ProductPrice,
	ProductStyled,
	ProductType
} from "./styles.ts";
import { addToCart, decrementProductCount, incrementProductCount } from "@features/cart/model";

type ProductProps = {
	id: number;
	imageUrl: string;
	type: string;
	name: string;
	price: number;
};

export const Product: FC<ProductProps> = ({ id, imageUrl, type, name, price }) => {
	const renderCount = useRenderCount();
	const [isProductInCart, setIsProductInCart] = useState<boolean>(false);

	const cartProducts = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	const handleAddToCartButtonClick = () => {
		dispatch(addToCart({ id, imageUrl, type, name, price }));
	};

	const handleIncrementButtonClick = () => {
		dispatch(incrementProductCount({ id }));
	};

	const handleDecrementButtonClick = () => {
		dispatch(decrementProductCount({ id }));
	};

	useEffect(() => {
		console.log(renderCount);
	}, [renderCount]);

	useEffect(() => {
		const currentProductIndex = cartProducts.products.findIndex((product) => product.id === id);

		if (currentProductIndex !== -1) {
			setIsProductInCart(true);
		} else {
			setIsProductInCart(false);
		}
	}, [cartProducts, id]);

	return (
		<ProductStyled style={{ backgroundColor: isProductInCart ? "red" : "green" }}>
			<ProductImageWrapper>
				<picture>
					<ProductImage src={imageUrl} alt={name} />
				</picture>
				{!isProductInCart && (
					<motion.button onClick={handleAddToCartButtonClick} className="button" type="button">
						<Icon iconType={IconType.Cart} styles={{ flex: "0 0 auto" }} />
						<motion.span className="button__text">Add to Cart</motion.span>
					</motion.button>
				)}
				{isProductInCart && (
					<motion.div className="button2">
						<motion.button onClick={handleDecrementButtonClick} className="button3">
							<Icon iconType={IconType.Minus} styles={{ flex: "0 0 auto" }} />
						</motion.button>
						<motion.span className="button__text2">
							{cartProducts.products.find((product) => product.id === id)?.count}
						</motion.span>
						<motion.button onClick={handleIncrementButtonClick} className="button3">
							<Icon iconType={IconType.Plus} styles={{ flex: "0 0 auto" }} />
						</motion.button>
					</motion.div>
				)}
			</ProductImageWrapper>
			<ProductContent>
				<ProductType>{type}</ProductType>
				<ProductName>{name}</ProductName>
				<ProductPrice>${formatNumberToTwoDecimalPlaces(price)}</ProductPrice>
			</ProductContent>
		</ProductStyled>
	);
};
