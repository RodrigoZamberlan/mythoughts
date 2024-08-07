import styles from "./styles/Textarea.module.css";
import propTypes from "prop-types";

const Textarea = ({
  id,
  name,
  rows,
  cols,
  text,
  label,
  placeholder,
  handleChange,
  required = false,
  maxLength,
  customStyles,
}) => {
  return (
    <>
      <div className={styles.textareaWrapper}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label} {required && ` *`}
          </label>
        )}
        <textarea
          className={styles.textarea}
          id={id}
          name={name}
          value={text}
          rows={rows}
          cols={cols}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          style={customStyles}
        >
        </textarea>
        {maxLength && text.length < maxLength && <p className={styles.info}>{text.length}/{maxLength}</p>}
        {maxLength && text.length >= maxLength && <p className={styles.info}>You have reach the limit {text.length}/{maxLength}</p>}
      </div>
    </>
  );
};

Textarea.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  rows: propTypes.number.isRequired,
  cols: propTypes.number,
  text: propTypes.string,
  label: propTypes.string,
  handleChange: propTypes.func.isRequired,
  required: propTypes.bool,
  maxLength: propTypes.number,
  customStyles: propTypes.object,
};

export default Textarea;
