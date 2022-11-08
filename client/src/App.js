import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./screens/homeScreen";
import LoginScreen from "./screens/loginScreen";
import FacultyDashboardScreen from "./screens/facultyDashboardScreen";
import StudentsAttendanceScreen from "./screens/studentsAttendanceScreen";

// const renderLoader = () => {
//     <div className="loader">
//         <strong>Loading......</strong>
//     </div>;
// };

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
                </Routes>
            </div>
        </>
    );
}

export default App;
