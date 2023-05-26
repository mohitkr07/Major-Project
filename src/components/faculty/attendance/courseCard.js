import React from "react";
import Styles from "./attendance.module.css";
let CourseCard = (props) => {
  return (
    <>
      <div className={Styles.card}>
        <p>{props.courseid}</p>
        <p>{props.coursename}</p>
        <p>{props.semester}</p>
        <p>{props.branch}</p>
        <button>view</button>
      </div>
    </>
  );
};

export default CourseCard;
