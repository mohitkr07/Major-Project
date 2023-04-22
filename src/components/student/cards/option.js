import React from "react";
import styles from "../QuizComp.module.css";

let Option = (props) => {
  return (
    <div className={styles.choices}>
      <input type="radio" name="option" />
      <p>{props.option}</p>
    </div>
  );
};

export default Option;
