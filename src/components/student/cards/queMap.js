import React from "react";
import styless from "../QuizComp.module.css";
let QueMap = (props) => {
  return (
    <div className={styless.queMap}>
      <span>{props.que}</span>
    </div>
  );
};

export default QueMap;
