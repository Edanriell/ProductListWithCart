import "./add-to-cart-button.less";

import { FC } from "react";
import { motion } from "framer-motion";

import { Product } from "@entities/product/model";

import { Icon, IconType } from "@shared/ui/icon";
import { useAppDispatch } from "@shared/lib/hooks";

import { addToCart } from "../../model";

type AddToCartButtonProps = Product;

const addToCartButtonAnimationVariants = {
	initial: { x: "-50%", y: "50%", scale: 0.9, filter: "blur(2px)" },
	displayed: { opacity: 1, x: "-50%", y: "50%", scale: 1, filter: "blur(0px)" },
	hidden: { opacity: 0, x: "-50%", y: "50%", scale: 0.9, filter: "blur(2px)" },
	hovered: { scale: 1.1, color: "#c73b0f", borderColor: "#c73b0f" },
	taped: { scale: 0.9, color: "#c73b0f", borderColor: "#c73b0f" }
};

export const AddToCartButton: FC<AddToCartButtonProps> = ({ id, imageUrl, type, name, price }) => {
	const dispatch = useAppDispatch();

	const handleAddToCartButtonClick = () => {
		dispatch(addToCart({ id, imageUrl, type, name, price }));
	};

	return (
		<motion.button
			initial={"initial"}
			animate={"displayed"}
			exit={"hidden"}
			whileHover={"hovered"}
			whileTap={"taped"}
			variants={addToCartButtonAnimationVariants}
			onClick={handleAddToCartButtonClick}
			className="add-to-cart-button"
			type="button"
		>
			<Icon iconType={IconType.Cart} styles={{ flex: "0 0 auto" }} />
			<motion.span className="add-to-cart-button__text">Add to Cart</motion.span>
		</motion.button>
	);
};
