import "./cart-modal.less";

import { FC, Fragment, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { ProductRow } from "@entities/product/ui/product-row";
import { formatNumberToTwoDecimalPlaces } from "@entities/product/lib/functions";

import { clearCart } from "@features/cart/model";

import { Button } from "@shared/ui/button";
import { Icon, IconType } from "@shared/ui/icon";
import { useAppDispatch, useAppSelector, useWindowSize } from "@shared/lib/hooks";

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
	CartProductListItem
} from "./styles";

type CartModalProps = {
	onModalClose: () => void;
};

const cartModalAnimationVariants = {
	initialMobile: { opacity: 0, y: "100%", filter: "blur(16px)" },
	displayedMobile: { opacity: 1, y: 0, filter: "blur(0px)" },
	hiddenMobile: { opacity: 0, y: "100%", filter: "blur(16px)" },
	initial: { opacity: 0, x: "-50%", y: "-50%", scale: 0.8, filter: "blur(8px)" },
	displayed: { opacity: 1, x: "-50%", y: "-50%", scale: 1, filter: "blur(0px)" },
	hidden: { opacity: 0, x: "-50%", y: "-50%", scale: 0.8, filter: "blur(8px)" }
};

export const CartModal: FC<CartModalProps> = ({ onModalClose }) => {
	const dispatch = useAppDispatch();
	const { width } = useWindowSize();

	const cartProducts = useAppSelector((state) => state.cart.products);
	const orderTotal = useAppSelector((state) => state.cart.products).reduce(
		(accumulator, { count, price }) => accumulator + count * price,
		0
	);

	const [isCartProductListOverflowing, setIsCartProductListOverflowing] = useState<boolean>(false);
	const cartProductListRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (cartProductListRef.current) {
			const hasOverflow =
				cartProductListRef.current.scrollHeight > cartProductListRef.current.clientHeight;
			setIsCartProductListOverflowing(hasOverflow);
		}
	}, [cartProductListRef.current]);

	const handleStartNewOrderButtonClick = () => {
		onModalClose();

		setTimeout(() => {
			dispatch(clearCart());
		}, 250);
	};

	const renderCartProducts = () => {
		return cartProducts.map((product, index) => (
			<CartProductListItem key={product.id}>
				<ProductRow
					product={product}
					styles={{ paddingBottom: cartProducts.length - 1 === index ? "24rem" : "16rem" }}
				/>
			</CartProductListItem>
		));
	};

	return (
		<Fragment>
			{width !== null && (
				<motion.div
					initial={width >= 768 ? "initial" : "initialMobile"}
					animate={width >= 768 ? "displayed" : "displayedMobile"}
					exit={width >= 768 ? "hidden" : "hiddenMobile"}
					variants={cartModalAnimationVariants}
					className="cart-modal"
				>
					<CartModalHeader>
						<Icon iconType={IconType.Checkmark} />
						<CartModalTitle>Order Confirmed</CartModalTitle>
						<CartModalText>We hope you enjoy your food!</CartModalText>
					</CartModalHeader>
					<CartModalContent>
						<CartProductList ref={cartProductListRef} isOverflowing={isCartProductListOverflowing}>
							{renderCartProducts()}
						</CartProductList>
						<CartModalOrderTotal>
							<CartModalOrderTotalText>Order Total</CartModalOrderTotalText>
							<CartModalOrderTotalValue>
								${formatNumberToTwoDecimalPlaces(orderTotal)}
							</CartModalOrderTotalValue>
						</CartModalOrderTotal>
					</CartModalContent>
					<CartModalFooter>
						<Button onClick={handleStartNewOrderButtonClick}>Start New Order</Button>
					</CartModalFooter>
				</motion.div>
			)}
		</Fragment>
	);
};
