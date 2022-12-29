import { Grid } from "@mui/material";
import React from "react";
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
            <Featured style={{ width: "10vw" }} />
        </div>
    );
};

export default WelcomeScreen;
