import styles from "./styles/Modal.module.css";
import Button from "./Button.js";

const customStyles = {
    "position": "absolute",
    "right": "12px",
}

const Modal = ({ show, handleModal, children }) => {
  if (!show) {
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
