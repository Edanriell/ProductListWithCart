import "./add-to-cart-button.less";

import { FC } from "react";
import { motion } from "framer-motion";

import { Product } from "@entities/product/model";

import { Icon, IconType } from "@shared/ui/icon";
import { useAppDispatch } from "@shared/lib/hooks";

import { addToCart } from "../../model";

type AddToCartButtonProps = Product;

export const AddToCartButton: FC<AddToCartButtonProps> = ({ id, imageUrl, type, name, price }) => {
	const dispatch = useAppDispatch();

	const handleAddToCartButtonClick = () => {
		dispatch(addToCart({ id, imageUrl, type, name, price }));
	};

	return (
		<motion.button
			initial={{ opacity: 0, x: "-50%", y: "50%", scale: 0.75 }}
			animate={{ opacity: 1, x: "-50%", y: "50%", scale: 1 }}
			exit={{ opacity: 0, x: "-50%", y: "50%", scale: 0.75 }}
			whileHover={{ scale: 1.1, color: "#c73b0f", borderColor: "#c73b0f" }}
			whileTap={{ scale: 0.9, color: "#c73b0f", borderColor: "#c73b0f" }}
			onClick={handleAddToCartButtonClick}
			className="add-to-cart-button"
			type="button"
		>
			<Icon iconType={IconType.Cart} styles={{ flex: "0 0 auto" }} />
			<motion.span className="add-to-cart-button__text">Add to Cart</motion.span>
		</motion.button>
	);
};
