import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginShow, setLoginShow] = useState(true);

    const loginForm = () => {
        return (
            <Grid container direction="column" style={{ padding: "20px" }}>
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
            <TextField
                    id="standard-basic"
                    label="Role"
                    variant="standard"
                    className="loginField"
            />
            
                <Button variant="contained" style={{  margin:"20px" }}> <Link to="/home">Login</Link> </Button>
            </Grid>
        );
    };

    const signupForm = () => {
        return (
            <Grid container direction="column" style={{ padding: "20px" }}>
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
            </Grid>
        );
    };

    return (
        <Grid container justifyContent="center"  >
            <Paper elevation={3} style={{ width: "30%", margin:"20px" }}>
                <Grid>
                    <Button
                        style={{ width: "100%" }}
                        onClick={() => setLoginShow(true)}
                    >
                        Login
                    </Button>
                    
                </Grid>

                {loginShow ? loginForm() : signupForm()}
            </Paper>
        </Grid>
    );
};

export default Login;
