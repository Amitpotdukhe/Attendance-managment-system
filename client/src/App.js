import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./screens/homeScreen";
import LoginScreen from "./screens/loginScreen";

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
                </Routes>
            </div>
        </>
    );
}

export default App;
