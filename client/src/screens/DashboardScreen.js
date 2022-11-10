import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const DashboardScreen = () => {
    return (
        <Grid container>
            <Grid
                container
                md={3}
                xs={12}
                style={{ marginRight: "20px" }}
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
                <img
                    src="https://picsum.photos/110/110"
                    style={{
                        borderRadius: "50%",
                        width: "9rem",
                        margin: "5px",
                    }}
                    alt=""
                />
                <Typography variant="h4">ilon Mosk</Typography>
                <Typography variant="h6">Computer Engineering</Typography>
            </Grid>
            <Grid item md={8} xs={12}>
                <Paper elevation={3} stype={{ padding: "20px" }}>
                    <Grid
                        container
                        justifyContent="center"
                        columns={{ xs: 12, md: 4 }}
                    >
                        <Button style={{ width: "20%" }}>Attendance</Button>
                        <Button style={{ width: "20%" }}>Edit</Button>
                        <Button style={{ width: "20%" }}>Details</Button>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default DashboardScreen;
