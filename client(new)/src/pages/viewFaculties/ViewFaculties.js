import React from "react";
import Table from "../../components/table/Table";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "./Card";
import "./viewFaculties.scss";
import Datatable from "../../components/datatable/Datatable";
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
        subjects: ["Blockchain Technology", "Full Stack Development lab"],
    },
    {
        name: "Amol Jumde",
        email: "sandesh.jain@bitwardha.ac.in",
        no: "+91 8976457634",
        subjects: ["Blockchain Technology", "Full Stack Development lab"],
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

                                    <p style={{ marginTop: "20px" }}>
                                        Subjects Assigned:
                                    </p>
                                    <Grid container direction="column">
                                        <p>Blockchain Technology</p>
                                        <p>Full Stack Development lab</p>
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
                    <Paper style={{ padding: "20px" }}>hii</Paper>
                    <Paper style={{ padding: "20px" }}>hii</Paper>
                    <Paper style={{ padding: "20px" }}>hii</Paper>
                </Grid>
            </div>
        </div>
    );
};
export default ViewFaculties;
