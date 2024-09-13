import "./link.less";

import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type LinkProps = {
	href: string;
	children: ReactNode;
} & ComponentPropsWithoutRef<"a"> &
	MotionProps;

const linkAnimationVariants = {
	hovered: { scale: 1.05, backgroundColor: "hsl(14,86%,34%)" },
	taped: { scale: 0.95, backgroundColor: "hsl(14,86%,34%)" }
};

export const Link: FC<LinkProps> = ({ href, children, ...rest }) => {
	return (
		<motion.a
			whileHover={"hovered"}
			whileTap={"taped"}
			variants={linkAnimationVariants}
			className="link"
			href={href}
			target="_self"
			{...rest}
		>
			{children}
		</motion.a>
	);
};
