import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BasicMenu from "./Menu";
import { Button, Grid } from "@mui/material";
const drawerWidth = 220;

const Navbar = () => {
    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    height: "55px",
                }}
            >
                <Toolbar>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button style={{ color: "white" }}>
                            <Typography variant="h6" noWrap component="div">
                                Dashboard
                            </Typography>
                        </Button>
                        <BasicMenu />
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
