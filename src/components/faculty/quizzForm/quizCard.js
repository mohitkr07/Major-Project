import React, { useState } from "react";
import classes from "./quizCard.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {

  const [toggle,setToggle] = useState(props.active)

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/addQue?id=${props.id}`);
  }

  
  function handleChange(){
    setToggle(!toggle)
    console.log(toggle)
    postData()
  }

  const postData = async(e)=>{

    const res = await fetch('http://localhost:5000/setQuiz',{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({toggle,id:props.id})
    })

    const data = await res.json()

    console.log(data)

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
        <label className={classes.switch}>
          <input type="checkbox" name="active" checked={toggle} onChange={handleChange}/>
          <span className={classes.slider}></span>
        </label>
      </div>
    </>
  );
};

export default Card;
