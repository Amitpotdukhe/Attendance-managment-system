import React from "react";
import SideBar from "../components/SideBar/SideBar";
import Widget from "../components/widget/Widget";
const FacultyDashboard = (props) => {
    const user = localStorage.getItem("user");
    return (
        <>
            {/* <SideBar /> */}
            <h1>bhen ka faculty </h1>
            <Widget type="STUDENTS" />
            <Widget type="FACULTY" />
            <h1>{user}</h1>
        </>
    );
};

export default FacultyDashboard;
