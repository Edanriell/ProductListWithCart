import { CSSProperties, FC } from "react";

import { formatNumberToTwoDecimalPlaces } from "../../lib/functions";
import type { Product } from "../../model";

import {
	ProductRowContent,
	ProductRowContentWrapper,
	ProductRowProductCount,
	ProductRowProductImage,
	ProductRowProductInfo,
	ProductRowProductName,
	ProductRowProductPrice,
	ProductRowProductTotalPrice,
	ProductRowStyled
} from "./styles";

type ProductRowProps = {
	product: Product & { count: number };
	styles?: CSSProperties;
};

export const ProductRow: FC<ProductRowProps> = ({ product, styles }) => {
	const { imageUrl, name, count, price } = product;

	return (
		<ProductRowStyled style={styles}>
			<ProductRowProductImage src={imageUrl} alt={"Image of " + name} />
			<ProductRowContent>
				<ProductRowContentWrapper>
					<ProductRowProductName>{name}</ProductRowProductName>
					<ProductRowProductInfo>
						<ProductRowProductCount>{count}x</ProductRowProductCount>
						<ProductRowProductPrice>
							@ {formatNumberToTwoDecimalPlaces(price)}
						</ProductRowProductPrice>
					</ProductRowProductInfo>
				</ProductRowContentWrapper>
				<ProductRowProductTotalPrice>
					${formatNumberToTwoDecimalPlaces(count * price)}
				</ProductRowProductTotalPrice>
			</ProductRowContent>
		</ProductRowStyled>
	);
};
