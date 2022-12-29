import { Grid } from "@mui/material";
import React from "react";
import AddFacultyForm from "./AddFacultyForm";
import ViewFaculties from "./ViewFaculties";

const ManageFaculty = () => {
    const addFacultyForm = () => {
        return <AddFacultyForm />;
    };
    return (
        <Grid container>
            <Grid item md={7}>
                <ViewFaculties />
            </Grid>
            <Grid item md={4}>
                {" "}
                {addFacultyForm()}
            </Grid>
        </Grid>
    );
};

export default ManageFaculty;
