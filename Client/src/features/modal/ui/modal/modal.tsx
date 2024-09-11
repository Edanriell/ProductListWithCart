import "./modal.less";

import { FC, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
	isModalOpened: boolean;
	onModalClose: () => void;
	ModalType: FC<{ onModalClose: () => void }>;
};

export const Modal: FC<ModalProps> = ({ isModalOpened, onModalClose, ModalType }) => {
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
