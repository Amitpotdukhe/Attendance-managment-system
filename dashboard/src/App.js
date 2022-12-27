import { BrowserRouter, Routes, Route} from "react-router-dom";
import FacultyDashboard from "./layout/FacultyDashboard/FacultyDashboard";
import StudentDashboard from "./layout/StudentDashboard/StudentDashboard";
import Login from "./layout/Login";
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/faculty/:id" element={<FacultyDashboard/>} />
                  <Route path="/student/:id" element={<StudentDashboard/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
