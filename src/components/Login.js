import { useState } from "react";
import styles from "./styles/Login.module.css";
import Form from "./Form.js";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const inputs = [
    {
      tag: "input",
      id: "username",
      name: "username",
      type: "text",
      value: formData.username || "",
      label: "Username",
      placeholder: "Type your unique username here",
      handleChange: handleChange,
      required: true,
    },
    {
      tag: "input",
      id: "password",
      name: "password",
      type: "password",
      value: formData.password || "",
      label: "Password",
      placeholder: "Type your password here",
      handleChange: handleChange,
      required: true,
    },
  ];

  const buttons = [
    {
      id: "btnLogin",
      type: "submit",
      text: "Log In",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1>MyThoughts</h1>
        <p className={styles.text}>
          Welcome to this app, please provide the info to log in
        </p>
        <Form fields={inputs} buttons={buttons} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
