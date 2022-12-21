import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, TextField } from "@mui/material";

import { Stack } from "@mui/system";
import React, { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from "react-router-dom";
import "./login.scss"


const Login = () => {
  const [loginShow, setLoginShow] = useState(true);
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Login as:</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Student</MenuItem>
          <MenuItem value={20}>Faculty</MenuItem>
          <MenuItem value={30}>HOD</MenuItem>
          <MenuItem value={40}>Admin</MenuItem>
        </Select>
      </FormControl>
            <Link className="link-btn" to="home">Login</Link>
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
            <Paper elevation={3} style={{width:"50%", margin:"30px"}}>
                <Grid>
                    <Button
                        style={{ width: "100%" }}
                        onClick={() => setLoginShow(true)}
                    >
                        Login
            </Button>
            
                   
                </Grid>

                {loginShow && loginForm() }
            </Paper>
        </Grid>
    );
};

export default Login;
