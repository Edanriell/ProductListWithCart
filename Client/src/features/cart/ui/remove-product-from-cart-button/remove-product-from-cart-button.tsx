import "./remove-product-from-cart-button.less";

import { FC } from "react";
import { motion } from "framer-motion";

import { Icon, IconType } from "@shared/ui/icon";
import { useAppDispatch } from "@shared/lib/hooks";

import { removeFromCart } from "../../model";

type RemoveProductFromCartButtonProps = {
	id: number;
	name: string;
};

const removeProductFromCartButtonAnimationVariants = {
	hovered: { color: "#260F08", scale: 1.1 },
	taped: { color: "#260F08", scale: 0.9 }
};

export const RemoveProductFromCartButton: FC<RemoveProductFromCartButtonProps> = ({ id, name }) => {
	const dispatch = useAppDispatch();

	const handleRemoveProductFromCartButtonClick = ({ id }: { id: number }) => {
		dispatch(removeFromCart({ id }));
	};

	return (
		<motion.button
			whileHover={"hovered"}
			whileTap={"taped"}
			variants={removeProductFromCartButtonAnimationVariants}
			className="remove-product-from-cart-button"
			onClick={() => handleRemoveProductFromCartButtonClick({ id })}
			type={"button"}
		>
			<Icon iconType={IconType.Cross} />
			<span className="visually-hidden">Remove product {name} from cart</span>
		</motion.button>
	);
};
