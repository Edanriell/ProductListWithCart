import "./error.less";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type ErrorProps = {
	children: ReactNode;
};

const errorAnimationVariants = {
	initial: {
		scale: 0.8,
		opacity: 0
	},
	displayed: {
		scale: 1,
		opacity: 1
	},
	hidden: {
		scale: 0.8,
		opacity: 0
	}
};

export const Error: FC<ErrorProps> = ({ children }) => {
	return (
		<motion.div
			variants={errorAnimationVariants}
			initial="initial"
			animate="displayed"
			exit="hidden"
			className="error"
		>
			{children}
		</motion.div>
	);
};
