import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ProductRowSimplified } from "@entities/product/ui/product-row-simplified";
import { formatNumberToTwoDecimalPlaces } from "@entities/product/lib/functions";

import { withModalTrigger } from "@features/modal/model";
import { CartModal } from "@features/modal/ui/cart-modal";

import { Button } from "@shared/ui/button";
import { useAppSelector } from "@shared/lib/hooks";
import { Icon, IconType } from "@shared/ui/icon";

import { RemoveProductFromCartButton } from "../remove-product-from-cart-button";

import {
	CartBanner,
	CartBannerText,
	CartBannerTextBold,
	CartImage,
	CartPrimaryText,
	CartSecondaryText,
	CartStyled,
	OrderTotal,
	OrderTotalText,
	OrderTotalValue,
	ProductList
} from "./styles.ts";

const cartProductAnimationVariants = {
	initial: { y: -10, opacity: 0, scale: 1, filter: "blur(2px)" },
	displayed: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
	hidden: { y: 10, opacity: 0, scale: 1, filter: "blur(2px)" }
};

const OpenModalButton = withModalTrigger({
	Trigger: (props) => <Button {...props}>Confirm Order</Button>,
	ModalType: CartModal
});

export const Cart: FC = () => {
	const cartProducts = useAppSelector((state) => state.cart.products);
	const orderTotal = useAppSelector((state) => state.cart.products).reduce(
		(accumulator, { count, price }) => accumulator + count * price,
		0
	);

	const renderCartProducts = () => {
		return cartProducts.map((product, index) => (
			<motion.li
				style={{ position: "relative" }}
				initial={"initial"}
				animate={"displayed"}
				exit={"hidden"}
				variants={cartProductAnimationVariants}
				key={product.id}
			>
				<ProductRowSimplified
					product={product}
					styles={{
						paddingBottom: cartProducts.length - 1 === index ? "24rem" : "16rem"
					}}
					RemoveProductFromCartButton={() =>
						RemoveProductFromCartButton({ id: product.id, name: product.name })
					}
				/>
			</motion.li>
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
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<CartImage src="/images/vector/cake.svg" alt="Illustration of chocolate cake" />
						<CartSecondaryText>Your added items will appear here</CartSecondaryText>
					</motion.div>
				</AnimatePresence>
			)}
			{cartProducts.length > 0 && (
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<ProductList>
							<AnimatePresence mode="sync">{renderCartProducts()}</AnimatePresence>
						</ProductList>
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
						<OpenModalButton />
					</motion.div>
				</AnimatePresence>
			)}
		</CartStyled>
	);
};
