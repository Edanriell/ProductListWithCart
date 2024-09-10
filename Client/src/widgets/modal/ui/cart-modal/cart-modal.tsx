import { FC } from "react";

type CartModalProps = {
	onModalClose: () => void;
};

export const CartModal: FC<CartModalProps> = ({ onModalClose }) => {
	return (
		<div>
			<h2>Modal Content</h2>
			<button onClick={onModalClose}>Close Modal</button>
		</div>
	);
};

// TODO
// Refactor Modal as Feature
// Cart content can be widget tho according to FSD
