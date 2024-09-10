import { FC } from "react";

import { Button } from "@shared/ui/button";
import { Icon, IconType } from "@shared/ui/icon";

import {
	CartModalContent,
	CartModalFooter,
	CartModalHeader,
	CartModalOrderTotal,
	CartModalOrderTotalText,
	CartModalOrderTotalValue,
	CartModalText,
	CartModalTitle,
	CartProductList,
	StyledCartModal
} from "./styles";
import { useAppSelector } from "@shared/lib/hooks";
import { formatNumberToTwoDecimalPlaces } from "@entities/product/lib/functions";

type CartModalProps = {
	onModalClose: () => void;
};

export const CartModal: FC<CartModalProps> = ({ onModalClose }) => {
	const cartProducts = useAppSelector((state) => state.cart.products);
	const orderTotal = useAppSelector((state) => state.cart.products).reduce(
		(accumulator, { count, price }) => accumulator + count * price,
		0
	);

	const renderCartProducts = () => {
		return cartProducts.map(({ imageUrl, name, price, count, id }) => (
			<li key={id}>
				<div>
					<img src={imageUrl} alt={"Image of " + name} />
					<div>
						<strong>{name}</strong>
						<div>
							<p>{count}</p>
							<p>{formatNumberToTwoDecimalPlaces(price)}</p>
						</div>
						<p>{formatNumberToTwoDecimalPlaces(count * price)}</p>
					</div>
				</div>
			</li>
		));
	};

	return (
		<StyledCartModal>
			<CartModalHeader>
				<Icon iconType={IconType.Checkmark} />
				<CartModalTitle>Order Confirmed</CartModalTitle>
				<CartModalText>We hope you enjoy your food!</CartModalText>
			</CartModalHeader>
			<CartModalContent>
				<CartProductList>{renderCartProducts()}</CartProductList>
				<CartModalOrderTotal>
					<CartModalOrderTotalText>Order Total</CartModalOrderTotalText>
					<CartModalOrderTotalValue>
						${formatNumberToTwoDecimalPlaces(orderTotal)}
					</CartModalOrderTotalValue>
				</CartModalOrderTotal>
			</CartModalContent>
			<CartModalFooter>
				<Button onClick={onModalClose}>Start New Order</Button>
			</CartModalFooter>
		</StyledCartModal>
	);
};

// TODO
// Finish Modal Cart styling
