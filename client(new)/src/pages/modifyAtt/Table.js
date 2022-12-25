import * as React from "react";
import { Box, Typography } from "@mui/material/";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "RollNo", width: 90 },

    {
        field: "lastName",
        headerName: "First name",
        width: 150,
        editable: true,
    },
    {
        field: "firstName",
        headerName: "Last name",
        width: 150,
        editable: true,
    },
    {
        field: "PRN",
        headerName: "PRN",
        type: "number",
        width: 150,
        editable: true,
    },
    {
        field: "Status",
        headerName: "Status",
        sortable: false,
        width: 150,
    },
    {
        field: "totalAttendance",
        headerName: "Total Attendance",
        width: 130,
    },
];

const rows = [
    {
        id: 1,
        lastName: "Tanushree",
        firstName: "Dongale",
        PRN: "1946491245035",
        Status: "Present",
        totalAttendance: 30,
    },
    {
        id: 2,
        lastName: "Tejes ",
        firstName: "Borade",
        PRN: "1946491245042",
        Status: "Present",
        totalAttendance: 45,
    },
    {
        id: 3,
        lastName: "Nikhil",
        firstName: "Tidke",
        PRN: "1946491245045",
        Status: "Present",
        totalAttendance: 67,
    },
    {
        id: 4,
        lastName: "Amit ",
        firstName: "Potdukhe",
        PRN: "1946491245016",
        Status: "Absent",
        totalAttendance: 89,
    },
    {
        id: 5,
        lastName: "Bhagyashri",
        firstName: "Kitey",
        PRN: "1946491245022",
        Status: "Present",
        totalAttendance: 90,
    },
    {
        id: 6,
        lastName: "Dipak",
        firstName: "Matte",
        PRN: "19464912450150",
        Status: "Absent",
        totalAttendance: 67,
    },
    {
        id: 7,
        lastName: "Hitesh",
        firstName: "Thakre",
        PRN: "1946491245044",
        Status: "Present",
        totalAttendance: 65,
    },
    {
        id: 8,
        lastName: "Makrand",
        firstName: "Zade",
        PRN: "1946491245036",
        Status: "Absent",
        totalAttendance: 77,
    },
    {
        id: 9,
        lastName: "Prajwal",
        firstName: "Bhasme",
        PRN: "1946491245065",
        Status: "Absent",
        totalAttendance: 30,
    },
];

export default function Table() {
    return (
        <Box sx={{ height: 600, width: "100%" }}>
            <Typography>List of all students (Present and Absent)</Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}
