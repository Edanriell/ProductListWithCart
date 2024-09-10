import { FC, Fragment } from "react";

import { ModalOverlay } from "./styles";

type ModalProps = {
	isModalOpened: boolean;
	onModalClose: () => void;
	ModalType: FC<{ onModalClose: () => void }>;
};

export const Modal: FC<ModalProps> = ({ isModalOpened, onModalClose, ModalType }) => {
	return (
		<Fragment>
			{isModalOpened && (
				<ModalOverlay>
					<ModalType onModalClose={onModalClose} />
				</ModalOverlay>
			)}
		</Fragment>
	);
};
