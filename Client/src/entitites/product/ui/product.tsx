import { FC } from "react";

import { Icon, IconType } from "@shared/ui/icon";

import { formatNumberToTwoDecimalPlaces } from "../lib/functions";

import {
	Button,
	ButtonText,
	ProductContent,
	ProductImage,
	ProductImageWrapper,
	ProductName,
	ProductPrice,
	ProductStyled,
	ProductType
} from "./styles.ts";

type ProductProps = {
	imageUrl: string;
	type: string;
	name: string;
	price: number;
};

export const Product: FC<ProductProps> = ({ imageUrl, type, name, price }) => {
	return (
		<ProductStyled>
			<ProductImageWrapper>
				<picture>
					<ProductImage src={imageUrl} alt={name} />
				</picture>
				<Button type="button">
					<Icon iconType={IconType.Cart} />
					<ButtonText>Add to Cart</ButtonText>
				</Button>
			</ProductImageWrapper>
			<ProductContent>
				<ProductType>{type}</ProductType>
				<ProductName>{name}</ProductName>
				<ProductPrice>${formatNumberToTwoDecimalPlaces(price)}</ProductPrice>
			</ProductContent>
		</ProductStyled>
	);
};
