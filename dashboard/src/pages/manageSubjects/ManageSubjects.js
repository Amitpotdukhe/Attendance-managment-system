import React from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { Stack } from "@mui/system";

const subjects = [
    {
        year: 1,
        sub: "Data structures",
        sem: "2nd",
        faculty: "Abhoshek Kinhekar",
    },
    {
        year: 1,
        sub: "Data structures",
        sem: "2nd",
        faculty: "Abhoshek Kinhekar",
    },
    {
        year: 1,
        sub: "Data structures",
        sem: "2nd",
        faculty: "Abhoshek Kinhekar",
    },
    {
        year: 1,
        sub: "Data structures",
        sem: "2nd",
        faculty: "Abhoshek Kinhekar",
    },
];

const ManageSubjects = () => {
    return (
        <Grid container>
            <Grid item md={7}>
                all subjects
                <Grid container direction="row" spacing={2}>
                    {subjects.map((item) => {
                        return (
                            <Card
                                year={item.year}
                                subject={item.sub}
                                semister={item.sem}
                                faculty={item.faculty}
                            />
                        );
                    })}
                </Grid>
            </Grid>
            <Grid item md={4}>
                {" "}
                subject form
            </Grid>
        </Grid>
    );
};

export default ManageSubjects;
