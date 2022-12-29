import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import WelcomeScreen from "./pages/WelcomeScreen";
import ManageSession from "./pages/ManageSession";
import ManageDepartment from "./pages/ManageDepartment";
import ManageSemester from "./pages/ManageSemester";
import ManageSubjects from "./pages/ManageSubjects";
import ManageFaculty from "./pages/ManageFaculty";
import ManageStudents from "./pages/ManageStudents";
import StudentDashboard from "./layout/StudentDashboard";
import Login from "./layout/Login";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return (
        <div className="App">
            <BrowserRouter>
                {window.location.pathname !== "/" && (
                    <>
                        <SideBar />
                        <Navbar />
                    </>
                )}
                {isLoggedIn && (
                    <div style={{ margin: "80px 20px 0 20px" }}>
                        <Routes>
                            <Route exact path="/" element={<Login />} />
                            <Route path="faculty-dashboard">
                                <Route index element={<WelcomeScreen />} />
                                <Route
                                    path="manageSession"
                                    element={<ManageSession />}
                                />
                                <Route
                                    path="manageDepartment"
                                    element={<ManageDepartment />}
                                />
                                <Route
                                    path="manageSemester"
                                    element={<ManageSemester />}
                                />
                                <Route
                                    path="manageSubjects"
                                    element={<ManageSubjects />}
                                />
                                <Route
                                    path="manageFaculty"
                                    element={<ManageFaculty />}
                                />
                                <Route
                                    path="manageStudents"
                                    element={<ManageStudents />}
                                />
                            </Route>

                            <Route
                                path="student-dashboard"
                                element={<StudentDashboard />}
                            />
                        </Routes>
                    </div>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
