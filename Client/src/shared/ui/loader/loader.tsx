import "./loader.less";

import { FC } from "react";
import { motion } from "framer-motion";

const loaderAnimationVariants = {
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

export const Loader: FC = () => {
	return (
		<motion.div
			variants={loaderAnimationVariants}
			initial="initial"
			animate="displayed"
			exit="hidden"
			className="loader"
		>
			<div className="loader__wrapper">
				<img className="loader__image" src="/images/vector/spinner.svg" alt="Loading" />
				<strong className="loader__text">Loading products</strong>
			</div>
		</motion.div>
	);
};
