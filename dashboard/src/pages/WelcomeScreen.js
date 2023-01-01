import { Grid } from "@mui/material";
import React from "react";
import Chart from "../components/chart/Chart";
import Featured from "../components/featured/Featured";
import Widget from "../components/widget/Widget";
const WelcomeScreen = () => {
    return (
        <div>
            <Grid container>
                <Widget item type="STUDENTS" />
                <Widget type="FACULTY" />
                <Widget type="balance" />
                <Widget type="earning" />
            </Grid>
            <Grid
                container
                justifyContent="center"
                style={{ marginTop: "50px" }}
            >
                <Featured style={{ width: "10vw" }} />
                <Chart title="Last 6 Months (Attendance)" aspect={2 / 1} />
            </Grid>
        </div>
    );
};

export default WelcomeScreen;
