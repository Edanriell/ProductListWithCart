import { FC } from "react";

import { formatNumberToTwoDecimalPlaces } from "@entities/product/lib/functions";

import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { Icon, IconType } from "@shared/ui/icon";

import { removeFromCart } from "../../model/cartSlice.ts";

import {
	CartContent,
	CartImage,
	CartPrimaryText,
	CartSecondaryText,
	CartStyled
} from "./styles.ts";

export const Cart: FC = () => {
	const cartProducts = useAppSelector((state) => state.cart.products);
	const dispatch = useAppDispatch();

	const handleRemoveProductFromCartButtonClick = ({ id }: { id: number }) => {
		dispatch(removeFromCart({ id }));
	};

	const renderCartProducts = () => {
		return cartProducts.map(({ id, name, count, price }, index) => (
			<li key={name + "-" + id + "-" + index}>
				<div>
					<strong>{name}</strong>
					<div>
						<p>{count}x</p>
						<p>@ ${formatNumberToTwoDecimalPlaces(price)}</p>
						<p>${formatNumberToTwoDecimalPlaces(price * count)}</p>
					</div>
					<button onClick={() => handleRemoveProductFromCartButtonClick({ id })} type={"button"}>
						<Icon iconType={IconType.Cross} />
						<span className="visually-hidden">Remove product {name} from cart</span>
					</button>
				</div>
			</li>
		));
	};

	return (
		<CartStyled>
			<CartPrimaryText>
				Your Cart <span>({cartProducts.length})</span>
			</CartPrimaryText>
			{cartProducts.length === 0 && (
				<CartContent>
					<CartImage src="/images/vector/cake.svg" alt="Illustration of chocolate cake" />
					<CartSecondaryText>Your added items will appear here</CartSecondaryText>
				</CartContent>
			)}
			{cartProducts.length > 0 && (
				<CartContent>
					<ul>{renderCartProducts()}</ul>
					<div>
						<p>Order Total</p>
						<strong></strong>
					</div>
					<div>
						<Icon iconType={IconType.Tree} />
						<p>
							This is a <b>carbon-neutral</b> delivery
						</p>
					</div>
					<button type={"button"}>Confirm Order</button>
				</CartContent>
			)}
		</CartStyled>
	);
};
