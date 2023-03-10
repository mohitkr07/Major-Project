import "./App.css";
import Main_page from "./components/main_page/main_page";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_dash from "./components/admin/admin_dash";
import AdminLogin from "./components/admin/admin_login/admin_login";
import FacultyLogin from "./components/faculty/facultyLogin/FacultyLogin";
import FacultyReg from "./components/faculty/facultyReg/FacultyReg";
import StudentDash from "./components/student_dashboard/StudentDash";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main_page />} />
          <Route exact path="admin" element={<AdminLogin />} />
          <Route exact path="faculty" element={<FacultyLogin />} />
          <Route exact path="adminDashboard" element={<Admin_dash />} />
          <Route exact path="facultyReg" element={<FacultyReg />} />
          <Route exact path="studentdash" element={<StudentDash />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
