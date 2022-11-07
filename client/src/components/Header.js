import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [openSlideMenu, setOpenSlideMenu] = useState(false);

    return (
        <>
            <div className="header">
                Attendance Managment System
                <div className="btn-box">
                    <Link className="btn-header">Home</Link>
                    <Link className="btn-header">Login</Link>
                    <Link className="btn-header">SignUp</Link>
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
