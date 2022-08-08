import ModalComponent from "react-modal"

import { useModalStore } from "../../../state-machine/use-modal-store"

export const Modal: React.FC = () => {
	const customStyles: ModalComponent.Styles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			width: "90%",
		},
	}
	const { modal, hideModal } = useModalStore()

	return (
		<ModalComponent
			isOpen={modal.show}
			onRequestClose={hideModal}
			style={customStyles}
			contentLabel={modal.title}
		>
			<div>{modal.children}</div>
		</ModalComponent>
	)
}
