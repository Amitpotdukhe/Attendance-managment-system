import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const drawerWidth = 220;

const hodRoutes = [
    { name: "Manage Session", path: "/faculty-dashboard/manageSession" },
    { name: "Manage Department", path: "/faculty-dashboard/manageDepartment" },
    { name: "Manage Semester", path: "/faculty-dashboard/manageSemester" },
    { name: "Manage Subjects", path: "/faculty-dashboard/manageSubjects" },
    { name: "Manage Faculty", path: "/faculty-dashboard/manageFaculty" },
    { name: "Manage Students", path: "/faculty-dashboard/manageStudents" },
];

const facultyRoutes = [
    { name: "Mark Attendance", path: "/faculty-dashboard/manageSession" },
    { name: "Modify Attendance", path: "/faculty-dashboard/manageDepartment" },
    { name: "Attendance Analysis", path: "/faculty-dashboard/manageSemester" },
    { name: "Generate Report", path: "/faculty-dashboard/manageSubjects" },
];

export default function SideBar() {
    const loggedUser = localStorage.getItem("user").split(",");
    const hodBar = () => {
        return (
            <>
                <Divider style={{ marginTop: "20px" }} />
                <Grid container justifyContent="center">
                    <Typography variant="h6">HOD</Typography>
                </Grid>
                <Divider />
                <List>
                    {hodRoutes.map((text, index) => (
                        <ListItem key={text.name} disablePadding>
                            <Link
                                to={text.path}
                                style={{
                                    textDecoration: "none",
                                    color: "grey",
                                }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </>
        );
    };

    const facultyBar = () => {
        return (
            <>
                <Divider />
                <Grid container justifyContent="center">
                    <Typography variant="h6">Faculty</Typography>
                </Grid>
                <Divider />
                <List>
                    {facultyRoutes.map((text, index) => (
                        <ListItem key={text.name} disablePadding>
                            <Link
                                to={text.path}
                                style={{
                                    textDecoration: "none",
                                    color: "grey",
                                }}
                            >
                                <ListItemButton>
                                    {/* <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon> */}
                                    <ListItemText primary={text.name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </>
        );
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {hodBar()}
                {facultyBar()}
                {/* {loggedUser[2] === "hod" ? (
                    hodBar()
                ) : loggedUser[2] === "faculty" ? (
                    facultyBar()
                ) : (
                    <h3>yes</h3>
                )} */}
            </Drawer>
        </Box>
    );
}
