import { FC, ReactNode, useEffect, useState } from "react";

import { useAppSelector, useRenderCount } from "@shared/lib/hooks";

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

type ProductProps = {
	id: number;
	imageUrl: string;
	type: string;
	name: string;
	price: number;
	AddToCartButton?: () => ReactNode;
	CartActionsButton?: () => ReactNode;
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
	const renderCount = useRenderCount();
	const [isProductInCart, setIsProductInCart] = useState<boolean>(false);

	const cartProducts = useAppSelector((state) => state.cart);

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
		<ProductStyled>
			<ProductImageWrapper>
				<picture>
					<ProductImage src={imageUrl} alt={name} />
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
