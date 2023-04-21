import React, { useEffect, useState } from "react";
import StudentDashCss from "./StudentDash.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StudentDash = () => {

  const [data,setData] = useState({
    Name:'Loading...',
    Father:'Loading...',
    Gender : 'Loading...',
    Contact : 'Loading...',
    Branch : 'Loading...',
    Id : 'Loading...',
    Semester : 'Loading...',
  });

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{

    const res = await fetch('http://localhost:5000/studentInfo',{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      }
    })

    const data = await res.json()
    setData(data)
    console.log(data)
  }

  return (
    <div class={StudentDashCss.container}>
      <div class={StudentDashCss.nav}>
        <span>STUDENT</span>
      </div>

      <div class={StudentDashCss.semesterBox}>
        <span id={(StudentDashCss.semHead, StudentDashCss.center)}>
          Current-Sem
        </span>
        <span id={StudentDashCss.semHead}>{data.Semester}</span>
      </div>

      <div class={StudentDashCss.front}>
        <div class={StudentDashCss.options}>
          <button>Dashboard</button>
          <button>Courses</button>
          <button>Quiz </button>
        </div>

        <div class={StudentDashCss.dashboard}>
          <div class={StudentDashCss.studentInfo}>
            <div class={StudentDashCss.profile}>
              <div class={StudentDashCss.profile1}>
                <div class={StudentDashCss.pic}>
                  <FontAwesomeIcon icon="fa-4x fa-sharp fa-solid fa-user" />
                </div>
              </div>
              <hr />
              <div class={StudentDashCss.profile2}>
                <div class={(StudentDashCss.stId, StudentDashCss.infoBox)}>
                  <span>Name : {data.Name.toUpperCase()}</span>
                </div>
                <div class={(StudentDashCss.stId, StudentDashCss.infoBox)}>
                  ID : {data.Id.toUpperCase()}
                </div>
                <div class={(StudentDashCss.stId, StudentDashCss.infoBox)}>
                  Father's Name : {data.Father.toUpperCase()}
                </div>
                <div class={(StudentDashCss.stId, StudentDashCss.infoBox)}>
                  Branch : {data.Branch}
                </div>
                <br></br>
                <div class={(StudentDashCss.stId, StudentDashCss.infoBox)}>
                  Contact : {data.Contact}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
