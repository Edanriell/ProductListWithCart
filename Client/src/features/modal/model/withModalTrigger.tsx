import { FC, Fragment, useState } from "react";
import { createPortal } from "react-dom";

import { Modal } from "../ui/modal";

const modalElement = document.getElementById("modal")!;

type withModalTriggerProps<T> = {
	Trigger: FC<T>;
	ModalType: FC<{ onModalClose: () => void }>;
};

export const withModalTrigger = <T extends Record<string, unknown>>({
	Trigger,
	ModalType
}: withModalTriggerProps<T>) => {
	return (props: T) => {
		const [modalState, setModalState] = useState<"opened" | "closed">("closed");

		const handleTriggerButtonClick = () => {
			setModalState((prevState) => (prevState === "closed" ? "opened" : "closed"));
		};

		const handleCloseModalButtonClick = () => {
			setModalState("closed");
		};

		return (
			<Fragment>
				{createPortal(
					<Modal
						isModalOpened={modalState === "opened"}
						onModalClose={handleCloseModalButtonClick}
						ModalType={ModalType}
					/>,
					modalElement
				)}
				<Trigger {...props} onClick={handleTriggerButtonClick} />
			</Fragment>
		);
	};
};
