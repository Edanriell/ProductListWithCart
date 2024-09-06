import "./cart-actions-button.less";

import { FC } from "react";
import { motion } from "framer-motion";

import { Icon, IconType } from "@shared/ui/icon";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";

import { decrementProductCount, incrementProductCount } from "../../model";

type CartActionsButtonProps = {
	id: number;
	name: string;
};

export const CartActionsButton: FC<CartActionsButtonProps> = ({ id, name }) => {
	const cartProducts = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	const handleIncrementButtonClick = () => {
		dispatch(incrementProductCount({ id }));
	};

	const handleDecrementButtonClick = () => {
		dispatch(decrementProductCount({ id }));
	};

	const currentProductCount = (): number => {
		const currentProduct = cartProducts.products.find((product) => product.id === id);

		return currentProduct ? currentProduct.count : 0;
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: "-50%", y: "50%", scale: 0.75, filter: "blur(4px)" }}
			animate={{ opacity: 1, x: "-50%", y: "50%", scale: 1, filter: "blur(0px)" }}
			exit={{ opacity: 0, x: "-50%", y: "50%", scale: 0.75, filter: "blur(4px)" }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className="cart-actions-button"
		>
			<motion.button
				whileHover={{ background: "#fff", color: "#c73b0f" }}
				onClick={handleDecrementButtonClick}
				className="cart-actions-button__action"
			>
				<Icon iconType={IconType.Minus} styles={{ flex: "0 0 auto" }} />
				<span className="visually-hidden">{"Add one unit of " + name + " to cart"}</span>
			</motion.button>
			<motion.span className="cart-actions-button__text">{currentProductCount()}</motion.span>
			<motion.button
				whileHover={{ background: "#fff", color: "#c73b0f" }}
				onClick={handleIncrementButtonClick}
				className="cart-actions-button__action"
			>
				<Icon iconType={IconType.Plus} styles={{ flex: "0 0 auto" }} />
				<span className="visually-hidden">{"Remove one unit of " + name + " from cart"}</span>
			</motion.button>
		</motion.div>
	);
};
