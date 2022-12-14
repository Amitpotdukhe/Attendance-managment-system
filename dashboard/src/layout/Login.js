import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import axios from "axios";
import { Grid } from "@mui/material";
// import Link from '@mui/joy/Link';

const roles = {
    faculty: "faculty",
    student: "student",
    hod: "hod",
};

export default function App() {
    localStorage.setItem("isLoggedIn", false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");

    const handleSubmit = async () => {
        console.log(email, password, role);

        try {
            const req = await axios.post(`/api/${role}/login`, [
                email,
                password,
                role,
            ]);

            if (req.status && req.data.data.length !== 0) {
                localStorage.setItem("user", req.data.data);
                localStorage.setItem("isLoggedIn", true);
                if (role === "faculty" || role === "HOD" || role === "hod") {
                    window.location.href = "/faculty-dashboard";
                } else {
                    window.location.href = "/student/dashboard";
                }
            } else {
                console.log("failed:", req);
                alert("failed");
            }
        } catch (err) {
            alert("Login details incorrect");
            console.log(err);
        }
    };
    return (
        <Grid container alignItems="center" justifyContent="center">
            <CssVarsProvider>
                <main>
                    <Sheet
                        sx={{
                            width: 300,
                            mx: "auto",
                            my: 4,
                            py: 3,
                            px: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            borderRadius: "sm",
                            boxShadow: "md",
                        }}
                        variant="outlined"
                    >
                        <div>
                            <Typography level="h4" component="h1">
                                <b>Welcome!</b>
                            </Typography>
                            <Typography level="body2">
                                Sign in to continue.
                            </Typography>
                        </div>
                        <TextField
                            name="email"
                            type="email"
                            placeholder="xyz@bitwardha.ac.in"
                            label="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            name="password"
                            type="password"
                            placeholder="password"
                            label="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            name="role"
                            type="role"
                            placeholder="Role (faculty, student, hod)"
                            label="Role"
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />

                        <Select
                            placeholder="Login Type"
                            defaultValue="student"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <Option value={role}>Student</Option>
                            <Option value={role}>Faculty</Option>
                        </Select>

                        <Button
                            sx={{ mt: 1 }}
                            type="submit"
                            onClick={() => handleSubmit()}
                        >
                            Log in
                        </Button>
                    </Sheet>
                </main>
            </CssVarsProvider>
        </Grid>
    );
}
