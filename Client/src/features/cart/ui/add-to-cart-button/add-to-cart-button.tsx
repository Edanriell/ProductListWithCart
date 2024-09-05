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
			onClick={handleAddToCartButtonClick}
			className="add-to-cart-button"
			type="button"
		>
			<Icon iconType={IconType.Cart} styles={{ flex: "0 0 auto" }} />
			<motion.span className="add-to-cart-button__text">Add to Cart</motion.span>
		</motion.button>
	);
};
