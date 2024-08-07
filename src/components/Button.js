import styles from "./styles/Button.module.css";

const Button = ({ icon, text, id, type = "button", handleClick, customStyles }) => {
  return (
    <>
      <button
        className={styles.button}
        id={id}
        type={type}
        onClick={handleClick}
        style={customStyles}
      >
        {icon && <span>{icon}</span>}
        {text}
      </button>
    </>
  );
};

export default Button;
