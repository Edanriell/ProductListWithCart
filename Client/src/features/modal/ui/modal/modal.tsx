import "./modal.less";

import { FC, Fragment, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
	isModalOpened: boolean;
	onModalClose: () => void;
	ModalType: FC<{ onModalClose: () => void }>;
};

export const Modal: FC<ModalProps> = ({ isModalOpened, onModalClose, ModalType }) => {
	const scrollbarWidth = window.innerWidth - document.body.clientWidth;

	const handleModalCloseOnEscKeyPress = (event: KeyboardEvent) => {
		if (event.key === "Escape") onModalClose();
	};

	useEffect(() => {
		if (isModalOpened) {
			document.body.style.overflow = "hidden";
			document.body.style.paddingRight = `${scrollbarWidth}px`;
			window.addEventListener("keydown", handleModalCloseOnEscKeyPress);
		}

		return () => {
			document.body.style.overflow = "auto";
			document.body.style.paddingRight = `0px`;
			window.removeEventListener("keydown", handleModalCloseOnEscKeyPress);
		};
	}, [isModalOpened]);

	return (
		<Fragment>
			<AnimatePresence mode="sync">
				{isModalOpened && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="modal-overlay"
					>
						<ModalType onModalClose={onModalClose} />
					</motion.div>
				)}
			</AnimatePresence>
		</Fragment>
	);
};
