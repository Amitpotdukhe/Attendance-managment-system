// import "./sidebar.scss";
// import React from "react";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";

// const subjects = [
//     "Cloud computing",
//     "Cloud computing lab",
//     "Big data analytics",
//     "Big data analytics lab",
//     "Software engineering",
// ];

// const Sidebar = ({ isStudent = false }) => {
//     const student = () => {
//         return (
//             <div>
//                 <p className="title">Student</p>

//                 <Link to="/products" style={{ textDecoration: "none" }}>
//                     <li>
//                         <LocalShippingIcon className="icon" />
//                         <span>Add Faculty</span>
//                     </li>
//                 </Link>
//                 <Link to="/products" style={{ textDecoration: "none" }}>
//                     <li>
//                         <CreditCardIcon className="icon" />
//                         <span>Add Subject</span>
//                     </li>
//                 </Link>
//                 <Link to="/products" style={{ textDecoration: "none" }}>
//                     <li>
//                         <StoreIcon className="icon" />
//                         <span>Assign Subjects</span>
//                     </li>
//                 </Link>
//                 <Link to="/products" style={{ textDecoration: "none" }}>
//                     <li>
//                         <InsertChartIcon className="icon" />
//                         <span>View Semesters</span>
//                     </li>
//                 </Link>
//             </div>
//         );
//     };

//     const faculty = () => {
//         return (
//             <div>
//                 <p className="title">HOD</p>

//                 <p className="title">SERVICES</p>

//                 <Link
//                     to="/faculty/mark-attendance"
//                     style={{ textDecoration: "none" }}
//                 >
//                     <li>
//                         <PersonOutlineIcon className="icon" />
//                         <span>Mark Attendance</span>
//                     </li>
//                 </Link>
//                 <li>
//                     <Link
//                         to="/faculty/modify-attendance"
//                         style={{ textDecoration: "none" }}
//                     >
//                         <li>
//                             <InsertChartIcon className="icon" />
//                             <span>Modify Attendance</span>
//                         </li>
//                     </Link>
//                 </li>
//                 <li>
//                     <SettingsApplicationsIcon className="icon" />
//                     <Link
//                         to="/faculty/analyze-attendance"
//                         style={{ textDecoration: "none" }}
//                     >
//                         <span>Attendance Analysis</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <SettingsApplicationsIcon className="icon" />
//                     <span>Generate Report</span>
//                 </li>
//             </div>
//         );
//     };

//     return (
//         <div className="sidebar">
//             <div className="top">
//                 <Link to="/" style={{ textDecoration: "none" }}>
//                     <span className="logo">Dashboard</span>
//                 </Link>
//             </div>
//             <hr />
//             <Button>
//                 <Link to="/faculty/mark-attendance">test</Link>
//             </Button>
//             <div className="center">
//                 <ul>
//                     <Link to="/products" style={{ textDecoration: "none" }}>
//                         <li>
//                             <LocalShippingIcon className="icon" />
//                             <span>Add Faculty</span>
//                         </li>
//                     </Link>
//                     <Link to="/products" style={{ textDecoration: "none" }}>
//                         <li>
//                             <CreditCardIcon className="icon" />
//                             <span>Add Subject</span>
//                         </li>
//                     </Link>
//                     <Link to="/products" style={{ textDecoration: "none" }}>
//                         <li>
//                             <StoreIcon className="icon" />
//                             <span>Assign Subjects</span>
//                         </li>
//                     </Link>
//                     <Link to="/products" style={{ textDecoration: "none" }}>
//                         <li>
//                             <InsertChartIcon className="icon" />
//                             <span>View Semesters</span>
//                         </li>
//                     </Link>
//                     <Link
//                         to="/faculty-dashboard"
//                         style={{ textDecoration: "none" }}
//                     >
//                         <li>
//                             <PersonOutlineIcon className="icon" />
//                             <span>Mark Attendance</span>
//                         </li>
//                     </Link>
//                     <Link
//                         to="/faculty/mark-attendance"
//                         style={{ textDecoration: "none" }}
//                     >
//                         <span>Mark Attendance</span>
//                     </Link>
//                 </ul>
//             </div>

//             <div className="center">
//                 <ul>
//                     <p className="title">MAIN</p>
//                     <li>
//                         <DashboardIcon className="icon" />
//                         <span>Dashboard</span>
//                     </li>

//                     <p className="title">USER</p>
//                     <li>
//                         <AccountCircleOutlinedIcon className="icon" />
//                         <span>Profile</span>
//                     </li>
//                     <li>
//                         <ExitToAppIcon className="icon" />
//                         <span>Logout</span>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;

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

const drawerWidth = 240;

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
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            {/* <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar> */}
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
            </Drawer>
            {/* <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                    Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed
                    adipiscing. Amet nisl suscipit adipiscing bibendum est
                    ultricies integer quis. Cursus euismod quis viverra nibh
                    cras. Metus vulputate eu scelerisque felis imperdiet proin
                    fermentum leo. Mauris commodo quis imperdiet massa
                    tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                    At augue eget arcu dictum varius duis at consectetur lorem.
                    Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                    est ullamcorper eget nulla facilisi etiam dignissim diam.
                    Pulvinar elementum integer enim neque volutpat ac tincidunt.
                    Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                    sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate
                    odio. Morbi tincidunt ornare massa eget egestas purus
                    viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
                    Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod
                    elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin
                    aliquam ultrices sagittis orci a.
                </Typography>
            </Box> */}
        </Box>
    );
}
