import React from "react";

import styles from "../Input/Input.module.scss";
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input className={styles.input}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
