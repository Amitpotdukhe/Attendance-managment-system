import { Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const AddFaculty = () => {
    return (
        <div className="home">
            <Sidebar />

            <Grid className="homeContainer" container justifyContent="center">
                <Grid
                    container
                    direction="column"
                    style={{ padding: "20px", width: "40%" }}
                >
                    <TextField
                        id="standard-basic"
                        label="First Name"
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Last Name"
                        variant="standard"
                        className="loginField"
                    />
                    <TextField
                        id="standard-basic"
                        label="Email Address"
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

                    <Button variant="contained" style={{ margin: "20px" }}>
                        {" "}
                        <Link
                            to="/home"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            Add Faculty
                        </Link>{" "}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddFaculty;
