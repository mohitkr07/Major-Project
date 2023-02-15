import React from "react";
import FacultyCss from "./FacultyReg.module.css";
const FacultyReg = () => {
  return (
    <>
      <div className={FacultyCss.container}>
        <div className={FacultyCss.nav}>
          <span>Faculty</span>
        </div>
        <div className={FacultyCss.top}>
          <h4>Registeration Form</h4>
        </div>
        <div className={FacultyCss.form}>
          <div className={FacultyCss.frm}>
            <label className={FacultyCss.labl} for="name">
              Full Name
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Enter Full Name"
            />

            <label className={FacultyCss.labl} for="Contact Number:">
              Contact Number
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Enter Contact Number"
            />

            <label className={FacultyCss.labl} for="gender">
              Gender:
            </label>
            <div className={FacultyCss.gen}>
              <input class="gen male" type="radio" value="Male" name="gender" />{" "}
              <label for="">Male</label>
              <input
                class="gen female"
                type="radio"
                value="Female"
                name="gender"
              />{" "}
              <label for="">Female</label>
              <input
                class="gen other"
                type="radio"
                value="Other"
                name="gender"
              />{" "}
              <label for="">Other</label>
            </div>
            <label className={FacultyCss.labl} for="email">
              Email
            </label>
            <input
              className={FacultyCss.inp}
              type="email"
              placeholder="Enter Email"
            />

            <label className={FacultyCss.labl} for="Password">
              Password
            </label>
            <input
              className={FacultyCss.inp}
              type="password"
              placeholder="Enter Password"
            />

            <label className={FacultyCss.labl} for="conf-password">
              Confirm Password
            </label>
            <input
              className={FacultyCss.inp}
              type="password"
              placeholder="Confirm Password"
            />

            <button className={FacultyCss.btn}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyReg;
