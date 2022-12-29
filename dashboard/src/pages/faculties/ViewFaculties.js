import React from "react";
import Card from "./Card";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const faculties = [
    {
        name: "Sandesh Jain",
        email: "sandesh.jain@bitwardha.ac.in",
        no: "+91 8976457634",
        subjects: ["Blockchain Technology", "Full Stack Development lab"],
    },
    {
        name: "Abhishek Kinhekar",
        email: "sandesh.jain@bitwardha.ac.in",
        no: "+91 8976457634",
        subjects: [
            "Big Data Analytics",
            "Big Data Analytics Lab",
            "Data Structures",
        ],
    },
    {
        name: "Amol Jumde",
        email: "sandesh.jain@bitwardha.ac.in",
        no: "+91 8976457634",
        subjects: [
            "Machine Learning",
            "Machine Learning",
            "programming in Java",
        ],
    },
    {
        name: "Urvashi Pote",
        email: "sandesh.jain@bitwardha.ac.in",
        no: "+91 8976457634",
        subjects: ["Blockchain Technology", "Full Stack Development lab"],
    },
    {
        name: "Amreen Khan",
        email: "sandesh.jain@bitwardha.ac.in",
        no: "+91 8976457634",
        subjects: ["Blockchain Technology", "Full Stack Development lab"],
    },
];

const ViewFaculties = () => {
    return (
        <Grid container direction="row">
            {faculties.map((item) => {
                return (
                    <Grid item md={6} sm={4}>
                        <Paper
                            style={{
                                padding: "20px",
                                margin: "30px",
                            }}
                        >
                            <Grid container direction="column">
                                <Typography variant="h5">
                                    {item.name}
                                </Typography>
                                <Typography variant="h7">
                                    {item.email}
                                </Typography>
                                <Typography variant="h7">
                                    Computer Dept.
                                </Typography>
                                <Typography variant="h7">{item.no}</Typography>
                            </Grid>
                            <p
                                style={{
                                    marginTop: "20px",
                                    textDecoration: "underline",
                                }}
                            >
                                Subjects Assigned:
                            </p>
                            <Grid
                                container
                                direction="column"
                                style={{ padding: "-2px" }}
                            >
                                {item.subjects.map((it) => {
                                    return (
                                        <Stack
                                            direction="row"
                                            style={{ display: "flex" }}
                                        >
                                            <Chip
                                                label={it}
                                                size="small"
                                                style={{
                                                    marginBottom: "6px",
                                                }}
                                            />
                                        </Stack>
                                    );
                                })}
                            </Grid>
                            <Grid>
                                <Button
                                    variant="contained"
                                    style={{
                                        width: "40%",
                                        margin: "10px",
                                    }}
                                >
                                    View
                                </Button>
                                <Button
                                    style={{
                                        width: "40%",
                                        margin: "10px",
                                    }}
                                    variant="contained"
                                >
                                    Edit
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    );
};
export default ViewFaculties;
