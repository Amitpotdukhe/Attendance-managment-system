import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./screens/homeScreen";
import LoginScreen from "./screens/loginScreen";
import FacultyDashboardScreen from "./screens/facultyDashboardScreen";
import StudentsAttendanceScreen from "./screens/studentsAttendanceScreen";
import DashboardScreen from "./screens/DashboardScreen";
import AddStudentScreen from "./screens/AddStudentScreen";

function App() {
    return (
        <>
            <Header />
            <div className="box">
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route
                        path="/faculty/dashboard/subject"
                        element={<StudentsAttendanceScreen />}
                    />
                    <Route
                        path="/faculty/dashboard"
                        element={<FacultyDashboardScreen />}
                    />
                    <Route
                        path="/student/dashboard"
                        element={<DashboardScreen />}
                    />
                    <Route path="/addStudent/" element={<AddStudentScreen />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
