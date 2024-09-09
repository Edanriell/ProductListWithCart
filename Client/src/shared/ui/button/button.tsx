import "./button.less";

import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
	return (
		<button className="button" type="button" {...rest}>
			{children}
		</button>
	);
};
