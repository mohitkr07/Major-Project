import React from "react";
import Styles from "./attendance.module.css";

let TakeAttendance = () => {
  return (
    <div className="outter">
      <div className="navbar">
        <a className="nav_text">Attendance</a>
      </div>
      <div className="content">
        <div className={Styles.TakeAttendance}>
          <table>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>ID</th>
              <th>Attendance</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Mohit</td>
              <td>2020KUEC2031</td>
              <td>
                <input type="checkbox"></input>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abhishek</td>
              <td>2020KUEC2033</td>
              <td>
                <input type="checkbox"></input>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kundan</td>
              <td>2020KUEC2029</td>
              <td>
                <input type="checkbox"></input>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TakeAttendance;
