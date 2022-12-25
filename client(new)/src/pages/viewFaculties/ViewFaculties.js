import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "./Card";
import "./viewFaculties.scss";
import { Button, Grid, Paper, Typography } from "@mui/material";

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
        <div className="home">
            <Sidebar />
            <div class="homeContainer">
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
                                    <Typography variant="h5">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h6">
                                        {item.email}
                                    </Typography>
                                    <p>Computer Dept.</p>
                                    <p>{item.no}</p>

                                    <p
                                        style={{
                                            marginTop: "20px",
                                            textDecoration: "underline",
                                        }}
                                    >
                                        Subjects Assigned:
                                    </p>
                                    <Grid container direction="column">
                                        {item.subjects.map((it) => {
                                            return <p>{it}</p>;
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
            </div>
        </div>
    );
};
export default ViewFaculties;
