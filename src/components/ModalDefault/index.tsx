import React from "react";
import Modal from "react-modal";
import { ModalContainer } from "./style";

import closeImg from "../../assets/images/close.svg";

interface IModalProps {
  isOpen?: boolean;
  onRequestClose?: () => void;
  children?: React.ReactNode;
}

const ModalDefault: React.FC<IModalProps> = ({ children, ...props }) => {
  return (
    <ModalContainer>
      <Modal
        isOpen={props.isOpen ? props.isOpen : false}
        onRequestClose={props.onRequestClose}
        overlayClassName={"react-modal-overlay"}
        className={"react-modal-content"}
      >
        <button type={"button"} onClick={props.onRequestClose} className={"react-modal-close"}>
          <img src={closeImg} alt={"Bottom Close"} />
        </button>
        {children}
      </Modal>
    </ModalContainer>
  );
};

export { ModalDefault };
