import styles from "./styles/Form.module.css";
import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";

const Form = ({ fields, buttons, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {fields.map((field, index) => (
            <div key={index} className={styles.containerField}>
              {field.tag === "input" && (
                <Input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  value={field.value}
                  placeholder={field.placeholder}
                  label={field.label}
                  handleChange={field.handleChange}
                  handleKeyDown={field.handleKeyDown}
                  required={field.required}
                  maxLength={field.maxLength}
                  customStyle={field.customStyle}
                />
              )}
              {field.tag === "textarea" && (
                <Textarea
                  id={field.id}
                  name={field.name}
                  text={field.text}
                  label={field.label}
                  rows={field.rows}
                  handleChange={field.handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  maxLength={field.maxLength}
                  customStyle={field.customStyle}
                />
              )}
            </div>
          ))}
        </div>
        <div>
          {buttons.map((button, index) => (
            <Button
              key={index}
              id={button.id}
              text={button.text}
              type={button.type}
              handleClick={button.handleClick}
              customStyle={button.customStyle}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default Form;
