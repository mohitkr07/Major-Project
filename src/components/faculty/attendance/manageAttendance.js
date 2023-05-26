import React, { useEffect, useState } from "react";
import Card from "./courseCard";
import Styles from "./attendance.module.css";
let ManageAttendance = () => {

  const [course,setCourse] = useState([]);
  const [faculty,setFaculty] = useState({});

  useEffect(()=>{
    getFaculty();
    getCourses();
  },[])

  async function getCourses(){

    const res = await fetch(`http://localhost:5000/courses/${faculty.Id}`,{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
    })

    const data = await res.json()
    setCourse(data)
    console.log(data)

  }

  async function getFaculty(){

    const res = await fetch('http://localhost:5000/getFaculty',{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
    })

    const data = await res.json()
    setFaculty(data)
    console.log(data)

  }


  return (
    <div className="outter">
      <div className="navbar">
        <a className="nav_text">Attendance</a>
      </div>
      <div className="content">
        <div className={Styles.attendanceBox}>
          <Card courseid="1" coursename="xyz" semester="6" branch="ece" />
          <Card courseid="1" coursename="xyz" semester="6" branch="ece" />
        </div>
      </div>
    </div>
  );
};

export default ManageAttendance;
