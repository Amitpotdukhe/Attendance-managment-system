import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layout/Login";
import FacultyDashboard from "./layout/FacultyDashboard";
import StudentDashboard from "./layout/StudentDashboard";
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
