import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
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
            sm={12}
        >
            <Typography variant="h5">Subject: {name}</Typography>
            <Typography> Faculty: {faculty}</Typography>
            {showAtt ? (
                <Grid>
                    <Typography>Total Students: 69</Typography>
                    <Typography>Average Attendance: 72%</Typography>
                </Grid>
            ) : (
                <h3></h3>
            )}
            <Typography style={{ margin: "0.3rem" }} className="btn">
                {showAtt ? (
                    <Typography>Analyze Attendance</Typography>
                ) : (
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Mark" />
                    </FormGroup>
                )}
            </Typography>
        </Paper>
    );
};

export default Card;
