import { FC } from "react";
import { motion } from "framer-motion";

import { formatNumberToTwoDecimalPlaces } from "@entities/product/lib/functions";

import { Button } from "@shared/ui/button";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { Icon, IconType } from "@shared/ui/icon";

import { removeFromCart } from "../../model/cartSlice.ts";

import {
	CartBanner,
	CartBannerText,
	CartBannerTextBold,
	CartContent,
	CartImage,
	CartPrimaryText,
	CartSecondaryText,
	CartStyled,
	OrderTotal,
	OrderTotalText,
	OrderTotalValue,
	ProductCount,
	ProductInfo,
	ProductList,
	ProductListItem,
	ProductName,
	ProductPrice,
	ProductRow,
	ProductRowContent,
	ProductTotalPrice
} from "./styles.ts";

export const Cart: FC = () => {
	const cartProducts = useAppSelector((state) => state.cart.products);
	const orderTotal = useAppSelector((state) => state.cart.products).reduce(
		(accumulator, { count, price }) => accumulator + count * price,
		0
	);
	const dispatch = useAppDispatch();

	const handleRemoveProductFromCartButtonClick = ({ id }: { id: number }) => {
		dispatch(removeFromCart({ id }));
	};

	const renderCartProducts = () => {
		return cartProducts.map(({ id, name, count, price }, index) => (
			<ProductListItem key={name + "-" + id + "-" + index}>
				<ProductRow
					style={{ paddingBottom: cartProducts.length - 1 === index ? "24rem" : "16rem" }}
				>
					<ProductRowContent>
						<ProductName>{name}</ProductName>
						<ProductInfo>
							<ProductCount style={{ minWidth: "21rem" }}>{count}x</ProductCount>
							<ProductPrice>@ ${formatNumberToTwoDecimalPlaces(price)}</ProductPrice>
							<ProductTotalPrice>
								${formatNumberToTwoDecimalPlaces(price * count)}
							</ProductTotalPrice>
						</ProductInfo>
					</ProductRowContent>
					<motion.button
						onClick={() => handleRemoveProductFromCartButtonClick({ id })}
						type={"button"}
					>
						<Icon iconType={IconType.Cross} />
						<span className="visually-hidden">Remove product {name} from cart</span>
					</motion.button>
				</ProductRow>
			</ProductListItem>
		));
	};

	return (
		<CartStyled
			style={{ padding: cartProducts.length === 0 ? "24rem 24rem 40rem 24rem" : "24rem" }}
		>
			<CartPrimaryText style={{ marginBottom: cartProducts.length === 0 ? "40rem" : "24rem" }}>
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
					<ProductList>{renderCartProducts()}</ProductList>
					<OrderTotal>
						<OrderTotalText>Order Total</OrderTotalText>
						<OrderTotalValue>${formatNumberToTwoDecimalPlaces(orderTotal)}</OrderTotalValue>
					</OrderTotal>
					<CartBanner>
						<Icon iconType={IconType.Tree} />
						<CartBannerText>
							This is a <CartBannerTextBold>carbon-neutral</CartBannerTextBold> delivery
						</CartBannerText>
					</CartBanner>
					<Button>Confirm Order</Button>
				</CartContent>
			)}
		</CartStyled>
	);
};
