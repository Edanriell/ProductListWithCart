import { FC, Fragment } from "react";

import { ModalOverlay } from "./styles";

type ModalProps = {
	isModalOpened: boolean;
	onModalClose: () => void;
	ModalContent: FC<{ onModalClose: () => void }>;
};

export const Modal: FC<ModalProps> = ({ isModalOpened, onModalClose, ModalContent }) => {
	return (
		<Fragment>
			{isModalOpened && (
				<ModalOverlay>
					<ModalContent onModalClose={onModalClose} />
				</ModalOverlay>
			)}
		</Fragment>
	);
};
