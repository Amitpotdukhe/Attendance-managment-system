import { Grid } from "@mui/material";
import React from "react";
import Card from "../components/Card";

const subjects = [
    { subject: "Cloud Computing", faculty: "ABC" },
    { subject: "Big Data Analytics", faculty: "khbdfahbv" },
    { subject: "FSD", faculty: "poSDioj" },
    { subject: "Blockchain Technology", faculty: "nmadnf" },
    { subject: "Software Engineering", faculty: "aifhdjou sdhfb" },
];

const FacultyDashboardScreen = () => {
    return (
        <Grid container justifyContent="center">
            {subjects.map((item, key) => {
                return (
                    <Card
                        key={key}
                        name={item.subject}
                        faculty={item.faculty}
                    />
                );
            })}
        </Grid>
    );
};

export default FacultyDashboardScreen;
