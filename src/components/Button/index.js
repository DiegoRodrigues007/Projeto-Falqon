import React from "react";
import styles from "../Button/Button.module.scss";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button type={Type} onClick={onClick} className={styles.button}>
      {Text}
    </button>
  );
};

export default Button;
