import "./sidebar.scss";
import React from "react"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const subjects = [
  "Cloud computing",
  "Cloud computing lab",
  "Big data analytics",
  "Big data analytics lab",
  "Software engineering",
  
]

const Sidebar = ({ isStudent = false }) => {
  
  const student = () => {
    return (
      <div>
        <p className="title">Student</p>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Add Faculty</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Add Subject</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Assign Subjects</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>View Semesters</span>
            </li>
          </Link>
      </div>
    )
  }

  const faculty = () => {
    return (
<div>
        <p className="title">HOD</p>
        <Link to="/faculty/view" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>View Faculties</span>
            </li>
        </Link>
          <Link to="/faculty/add" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Add Faculty</span>
            </li>
        </Link>
        
        <Link to="/faculty/view" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>View Subjects</span>
            </li>
          </Link>
          <Link to="/faculty/add-subject" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Add Subject</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Assign Subjects</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>View Semesters</span>
            </li>
          </Link>

          <p className="title">SERVICES</p>
          <Link to="/faculty/mark-attendance" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Mark Attendance</span>
            </li>
          </Link>
          <li>
           
            <Link to="/faculty/modify-attendance" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Modify Attendance</span>
            </li>
          </Link>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <Link to="/faculty/analyze-attendance" style={{ textDecoration: "none"}} >
            <span>Attendance Analysis</span>
            </Link>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Generate Report</span>
            </li>
            </div>
    )
  }

  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          
          {isStudent ? student() : faculty()}
          

          {/* <p className="title">SUBJECTS</p>
          {subjects.map((item) => {
            return(
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
                <span>{item}</span>
            </li>
              </Link>
            )
          })} */}
          
          
          
          
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
