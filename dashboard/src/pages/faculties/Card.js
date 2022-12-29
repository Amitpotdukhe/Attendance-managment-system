import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, faculty, showAtt = false }) => {
    return (
        <Paper
            item
            style={{
                padding: "30px 30px 0 30px",
                margin: "1rem",
            }}
            elevation={3}
            md={6}
            sm={6}
        >
            <Typography variant="h5">Subject: {name}</Typography>
            <Typography> Faculty: {faculty}</Typography>
            {showAtt ? (
                <Grid>
                    <Typography>Total Students: 69</Typography>
                    <Typography>Average Attendance: 72%</Typography>
                </Grid>
            ) : (
                <h3>no</h3>
            )}
            <Link
                style={{ margin: "0.3rem" }}
                className="btn"
                to="/faculty/dashboard/subject"
            >
                {showAtt ? (
                    <Typography>Analyze Attendance</Typography>
                ) : (
                    <Typography>Manage Attendance</Typography>
                )}
            </Link>
        </Paper>
    );
};

export default Card;
