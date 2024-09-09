import "./button.less";

import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type ButtonProps = {
	children: ReactNode;
} & ComponentPropsWithoutRef<"button"> &
	MotionProps;

const buttonAnimationVariants = {
	hovered: { scale: 1.05, backgroundColor: "hsl(14,86%,34%)" },
	taped: { scale: 0.95, backgroundColor: "hsl(14,86%,34%)" }
};

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
	return (
		<motion.button
			whileHover={"hovered"}
			whileTap={"taped"}
			variants={buttonAnimationVariants}
			className="button"
			type="button"
			{...rest}
		>
			{children}
		</motion.button>
	);
};
