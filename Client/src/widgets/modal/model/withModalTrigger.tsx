import { FC, Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Modal } from "../ui/modal";

const modalElement = document.getElementById("modal")!;

export const withModalTrigger = ({
	Trigger,
	ModalContent
}: {
	Trigger: FC<any>;
	ModalContent: FC<{ onModalClose: () => void }>;
}) => {
	return (props: any) => {
		const [modalState, setModalState] = useState<"opened" | "closed">("closed");

		useEffect(() => {
			console.log(`Modal is ${modalState}`);
		}, [modalState]);

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
						ModalContent={ModalContent}
					/>,
					modalElement
				)}
				<Trigger {...props} onClick={handleTriggerButtonClick} />
			</Fragment>
		);
	};
};
