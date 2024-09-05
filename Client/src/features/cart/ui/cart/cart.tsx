import { FC } from "react";

import { CartImage, CartPrimaryText, CartSecondaryText, CartStyled } from "./styles.ts";

export const Cart: FC = () => {
	return (
		<CartStyled>
			<CartPrimaryText>
				Your Cart <span>(0)</span>
			</CartPrimaryText>
			<CartImage src="/images/vector/cake.svg" alt="Illustration of chocolate cake" />
			<CartSecondaryText>Your added items will appear here</CartSecondaryText>
		</CartStyled>
	);
};
