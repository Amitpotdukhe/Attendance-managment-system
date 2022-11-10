import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [openSlideMenu, setOpenSlideMenu] = useState(false);

    return (
        <>
            <div className="header">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        style={{
                            height: "50px",
                            width: "70px",
                            animationPlayState: "running",
                            animation: "3s ease infinite float-y paused",
                            margin: "5px",
                        }}
                        src="/hero-drone.webp"
                        alt=""
                    />
                    <p className="heading">Attendance Managment System</p>
                </div>
                <div className="btn-box">
                    <Link to="/" className="btn-header">
                        Home
                    </Link>
                    <Link to="/login" className="btn-header">
                        Login
                    </Link>
                    <Link to="/addStudent" className="btn-header">
                        Add student
                    </Link>
                    <Link to="/student/dashboard" className="btn-header">
                        Dashboard
                    </Link>
                </div>
                <div
                    className="hamburger"
                    onClick={() => setOpenSlideMenu(!openSlideMenu)}
                >
                    <div className="hamLine"></div>
                    <div className="hamLine"></div>
                    <div className="hamLine"></div>
                </div>
            </div>
        </>
    );
};

export default Header;
