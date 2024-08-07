import styles from "./styles/Modal.module.css";
import Button from "./Button.js";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext.js";

const customStyles = {
    "position": "absolute",
    "right": "12px",
}

const Modal = ({children}) => {
  const {isModalOpen, handleModal} = useContext(ModalContext);

  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      <div className={styles.mask}></div>
      <div className={styles.modal}>
        <Button customStyles={customStyles} text="Close" handleClick={handleModal}/>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Modal;
