import React from "react";
import Card from "./courseCard";
import Styles from "./attendance.module.css";
let ManageAttendance = () => {
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
