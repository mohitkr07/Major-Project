import React from "react";
import classes from "./quizCard.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/quiz?id=${props.id}`);
  }

  return (
    <>
      <div style={{ border: "4px solid black", margin: "10px" }}>
        <button className={classes.out_div} onClick={handleClick}>
          <div className={classes.inner}>
            <a>{props.title}</a>
            <a>{props.faculty}</a>
            <a>{props.year}</a>
            <a>{props.branch}</a>
            <a>{props.duration}</a>
            <a>{props.marks}</a>
          </div>
        </button>
      </div>
    </>
  );
};

export default Card;