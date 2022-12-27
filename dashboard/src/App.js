import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacultyDashboard from "./layout/FacultyDashboard";
import StudentDashboard from "./layout/StudentDashboard";
import Login from "./layout/Login";

import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/faculty-dashboard"
                        element={<FacultyDashboard />}
                    />
                    <Route
                        path="/student-dashboard"
                        element={<StudentDashboard />}
                    />
                    <Route path="/faculty/:id" element={<FacultyDashboard />} />
                    <Route path="/student/:id" element={<StudentDashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
