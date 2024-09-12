import { CSSProperties, FC, ReactNode } from "react";

import { formatNumberToTwoDecimalPlaces } from "../../lib/functions";
import type { Product } from "../../model";

import {
	ProductCount,
	ProductInfo,
	ProductName,
	ProductPrice,
	ProductRowSimplifiedContent,
	ProductRowSimplifiedStyled,
	ProductTotalPrice
} from "./styles";

type ProductRowSimplifiedProps = {
	product: Product & { count: number };
	styles?: CSSProperties;
	RemoveProductFromCartButton?: () => ReactNode;
};

export const ProductRowSimplified: FC<ProductRowSimplifiedProps> = ({
	product,
	styles,
	RemoveProductFromCartButton
}) => {
	const { name, count, price } = product;

	return (
		<ProductRowSimplifiedStyled style={styles}>
			<ProductRowSimplifiedContent>
				<ProductName>{name}</ProductName>
				<ProductInfo>
					<ProductCount style={{ minWidth: "21rem" }}>{count}x</ProductCount>
					<ProductPrice>@ ${formatNumberToTwoDecimalPlaces(price)}</ProductPrice>
					<ProductTotalPrice>${formatNumberToTwoDecimalPlaces(price * count)}</ProductTotalPrice>
				</ProductInfo>
			</ProductRowSimplifiedContent>
			{RemoveProductFromCartButton && <RemoveProductFromCartButton />}
		</ProductRowSimplifiedStyled>
	);
};
