import { Button, Grid, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

const LoginScreen = () => {
    const [loginShow, setLoginShow] = useState(true);

    const loginForm = () => {
        return (
            <Stack style={{ padding: "20px" }}>
                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    className="loginField"
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    className="loginField"
                />
                <Button variant="contained">Login</Button>
            </Stack>
        );
    };

    const signupForm = () => {
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

    return (
        <Grid container justifyContent="center">
            <Paper elevation={3}>
                <Grid>
                    <Button
                        style={{ width: "50%" }}
                        onClick={() => setLoginShow(true)}
                    >
                        Login
                    </Button>
                    <Button
                        style={{ width: "50%" }}
                        onClick={() => setLoginShow(false)}
                    >
                        Signup
                    </Button>
                </Grid>

                {loginShow ? loginForm() : signupForm()}
            </Paper>
        </Grid>
    );
};

export default LoginScreen;
