import { Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, faculty }) => {
    return (
        <Paper
            style={{ padding: "30px 30px 0 30px", margin: "1rem" }}
            elevation={3}
        >
            <Typography>Subject: {name}</Typography>
            <Typography> Faculty: {faculty}</Typography>
            <Link
                style={{ margin: "1.3rem" }}
                className="btn"
                to="/faculty/dashboard/subject"
            >
                <Typography>Manage Attendance</Typography>
            </Link>
        </Paper>
    );
};

export default Card;
