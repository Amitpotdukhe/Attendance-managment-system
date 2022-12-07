import { Button, Grid, Paper } from "@mui/material";
import Table from "../components/Table";
import React, { useState } from "react";
import Stepper from "../components/Stepper";

const FacultyDashboardScreen = () => {
    const [value, setValue] = useState(2);
    const manageAttendance = () => {
        return <Stepper />;
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                            <Button style={{ width: "25%" }}>Subjects</Button>
                            <Button style={{ width: "25%" }}>
                                Analyse Attendance
                            </Button>
                            <Button style={{ width: "25%" }}>
                                Modify Attendance
                            </Button>
                            <Button style={{ width: "25%" }}>
                                Update Profile
                            </Button>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            style={{ marginTop: "1rem", padding: "10px" }}
                        >
                            {value === 1 ? <Table /> : <Stepper />}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FacultyDashboardScreen;
