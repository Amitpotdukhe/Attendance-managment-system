import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const AddStudentScreen = () => {
    const addStudentForm = () => {
        return (
            <Stack style={{ padding: "20px" }}>
                <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    className="loginField"
                />
                <TextField
                    id="standard-basic"
                    label="Role"
                    variant="standard"
                    className="loginField"
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    className="loginField"
                />
                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    className="loginField"
                />
                <Button variant="contained">SignUp</Button>
            </Stack>
        );
    };

    return <div>{addStudentForm()}</div>;
};

export default AddStudentScreen;
