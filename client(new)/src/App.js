import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analyze from "./pages/studentDashboard/Analyze";
import "./pages/home/home.scss";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import MarkAttendance from "./components/markAttendance/MarkAttendance";
import ModifyAtt from "./pages/modifyAtt/ModifyAtt";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import Datatable from "./components/datatable/Datatable";
import AddFaculty from "./pages/addFaculty/AddFaculty";
import ViewFaculties from "./pages/viewFaculties/ViewFaculties";

function App() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/">
                        <Route path="home" element={<Home />} />

                        <Route index element={<Login />} />

                        <Route
                            path="student-dashboard"
                            element={<StudentDashboard />}
                        />
                        <Route
                            path="student-dashboard/analyze-subjects"
                            element={<Analyze />}
                        />

                        <Route path="faculty">
                            <Route index element={<List />} />
                            <Route path="add" element={<AddFaculty />} />
                            <Route path=":userId" element={<Single />} />
                            <Route path="view" element={<ViewFaculties />} />
                            <Route
                                path="new"
                                element={
                                    <New
                                        inputs={userInputs}
                                        title="Add New User"
                                    />
                                }
                            />
                            <Route
                                path="mark-attendance"
                                element={<MarkAttendance />}
                            />
                            <Route
                                path="modify-attendance"
                                element={<ModifyAtt />}
                            />
                        </Route>

                        <Route path="products">
                            <Route index element={<List />} />
                            <Route path=":productId" element={<Single />} />
                            <Route
                                path="new"
                                element={
                                    <New
                                        inputs={productInputs}
                                        title="Add New Product"
                                    />
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
