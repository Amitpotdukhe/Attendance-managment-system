import React from "react";

const FacultyDashboard = (props) => {
    const user = localStorage.getItem("user");
    return (
        <>
            <h1>bhen ka faculty </h1>
            {user}
        </>
    );
};

export default FacultyDashboard;
