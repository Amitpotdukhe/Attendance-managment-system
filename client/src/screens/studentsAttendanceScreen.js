import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import SearchIcon from "@mui/icons-material/Search";

const StudentsAttendanceScreen = () => {
    return (
        <Grid container alignItems="center" direction="column">
            <TextField
                label="Search student"
                id="outlined-size-small"
                size="small"
                style={{ width: "80%", margin: "30px 0 30px 0" }}
                endAdornment={<SearchIcon></SearchIcon>}
            />
            <Table />
            <Button style={{ margin: "30px 0 40px 0" }} variant="contained">
                Submit Attendance
            </Button>
        </Grid>
    );
};

export default StudentsAttendanceScreen;
