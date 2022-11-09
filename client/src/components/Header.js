import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [openSlideMenu, setOpenSlideMenu] = useState(false);

    return (
        <>
            <div className="header">
                Attendance Managment System
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
