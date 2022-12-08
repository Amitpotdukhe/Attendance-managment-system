import { Button, Grid, Paper } from "@mui/material";
import Card from "../components/Card";
import React, { useState } from "react";
import Stepper from "../components/Stepper";
import MarkAtt from "../components/MarkAtt";

const subjects = [
    { subject: "Cloud Computing", faculty: "ABC" },
    { subject: "Cloud Computing Lab", faculty: "ABC" },
    { subject: "Big Data Analytics", faculty: "khbdfahbv" },
    { subject: "Big Data Analytics Lab", faculty: "khbdfahbv" },
    { subject: "FSD", faculty: "poSDioj" },
    { subject: "FSD Lab", faculty: "poSDioj" },
    { subject: "Blockchain Technology", faculty: "nmadnf" },
    { subject: "Software Engineering", faculty: "aifhdjou sdhfb" },
];

const FacultyDashboardScreen = () => {
    const [value, setValue] = useState(2);
    const manageAttendance = () => {
        return <Stepper />;
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const showSubjects = () => {
        return (
            <Grid container>
                {subjects.map((item) => {
                    return (
                        <Card
                            key={item.subject}
                            name={item.subject}
                            faculty={item.faculty}
                            showAtt={true}
                        />
                    );
                })}
            </Grid>
        );
    };

    return (
        <Grid container justifyContent="center">
            <Grid item md={12} xs={12}>
                <Paper elevation={3} stype={{ padding: "20px" }}>
                    <Grid
                        container
                        justifyContent="center"
                        direction="column"
                        columns={{ xs: 12, md: 4 }}
                    >
                        <Grid>
                            <Button
                                style={{ width: "25%" }}
                                onClick={() => setValue(1)}
                            >
                                Subjects
                            </Button>
                            <Button
                                style={{ width: "25%" }}
                                onClick={() => setValue(2)}
                            >
                                Modify Attendance
                            </Button>
                            <Button
                                style={{ width: "25%" }}
                                onClick={() => setValue(3)}
                            >
                                Mark Attendance
                            </Button>
                            <Button
                                style={{ width: "25%" }}
                                onClick={() => setValue(4)}
                            >
                                Update Profile
                            </Button>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            style={{ marginTop: "1rem", padding: "10px" }}
                        >
                            {value === 1 ? (
                                showSubjects()
                            ) : value === 2 ? (
                                <Stepper />
                            ) : (
                                <MarkAtt />
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FacultyDashboardScreen;
