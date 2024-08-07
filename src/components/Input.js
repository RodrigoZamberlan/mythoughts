import styles from "./styles/Input.module.css";
import PropTypes from "prop-types";

const Input = ({
  id,
  name,
  type,
  value,
  placeholder,
  handleChange,
  handleKeyDown,
  label,
  required = false,
  maxLength,
  customStyle,
}) => {
  return (
    <>
      <div className={styles.inputWrapper}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label} {required && ` *`}
          </label>
        )}
        <input
          className={styles.input}
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          required={required}
          maxLength={maxLength}
          style={customStyle}
        />
        {maxLength && value.length < maxLength && <p className={styles.info}>{value.length}/{maxLength}</p>}
        {maxLength && value.length >= maxLength && <p className={styles.info}>You have reach the limit {value.length}/{maxLength}</p>}
      </div>
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  customStyle: PropTypes.object,
};

export default Input;
