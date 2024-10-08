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

const cartActionsButtonAnimationVariants = {
	initial: { opacity: 0, x: "-50%", y: "50%", scale: 0.9, filter: "blur(2px)" },
	displayed: { opacity: 1, x: "-50%", y: "50%", scale: 1, filter: "blur(0px)" },
	hidden: { opacity: 0, x: "-50%", y: "50%", scale: 0.9, filter: "blur(2px)" }
};

const actionButtonAnimationVariants = {
	initial: { background: "rgba(255,255,255,0)", color: "#fff", scale: 1 },
	hovered: { background: "rgba(255,255,255,1)", color: "#c73b0f", scale: 1.1 },
	taped: { scale: 0.9, background: "rgba(255,255,255,1)", color: "#c73b0f" }
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
			initial={"initial"}
			animate={"displayed"}
			exit={"hidden"}
			variants={cartActionsButtonAnimationVariants}
			className="cart-actions-button"
		>
			<motion.button
				initial={"initial"}
				whileHover={"hovered"}
				whileTap={"taped"}
				variants={actionButtonAnimationVariants}
				onClick={handleDecrementButtonClick}
				className="cart-actions-button__action"
			>
				<Icon iconType={IconType.Minus} styles={{ flex: "0 0 auto" }} />
				<span className="visually-hidden">{"Add one unit of " + name + " to cart"}</span>
			</motion.button>
			<motion.span className="cart-actions-button__text">{currentProductCount()}</motion.span>
			<motion.button
				initial={"initial"}
				whileHover={"hovered"}
				whileTap={"taped"}
				variants={actionButtonAnimationVariants}
				onClick={handleIncrementButtonClick}
				className="cart-actions-button__action"
			>
				<Icon iconType={IconType.Plus} styles={{ flex: "0 0 auto" }} />
				<span className="visually-hidden">{"Remove one unit of " + name + " from cart"}</span>
			</motion.button>
		</motion.div>
	);
};
