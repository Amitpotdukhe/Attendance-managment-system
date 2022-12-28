import React from "react";

const StudentDashboard = (props) => {
    const user = localStorage.getItem("user");
    console.log(user);
    return (
        <>
            <h1>bhen ka student</h1>
            {user}
        </>
    );
};

export default StudentDashboard;
