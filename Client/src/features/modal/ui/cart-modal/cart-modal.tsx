import { FC } from "react";

import { Button } from "@shared/ui/button";
import { Icon, IconType } from "@shared/ui/icon";

type CartModalProps = {
	onModalClose: () => void;
};

export const CartModal: FC<CartModalProps> = ({ onModalClose }) => {
	return (
		<div>
			<header>
				<Icon iconType={IconType.Checkmark} />
				<h2>Order Confirmed</h2>
				<p>We hope you enjoy your food!</p>
			</header>
			<div>
				<ul>
					<li>
						<article></article>
					</li>
				</ul>
			</div>
			<footer>
				<Button onClick={onModalClose}>Start New Order</Button>
			</footer>
		</div>
	);
};
