import * as React from "react";
import { Box, Typography } from "@mui/material/";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "RollNo", width: 90 },
    {
        field: "fullName",
        headerName: "Name",
        width: 200,
        editable: true,
    },

    {
        field: "PRN",
        headerName: "PRN",
        type: "number",
        width: 120,
        editable: true,
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
        fullName: "Tanushree Dongale",
        PRN: 35,
        Status: "P",
        totalAttendance: 30,
    },
    {
        id: 2,
        fullName: "Tejas Borade",
        PRN: 42,
        totalAttendance: 30,
    },
    {
        id: 3,
        fullName: "Nikhil Tidke",
        PRN: 45,
        totalAttendance: 30,
    },
    {
        id: 4,
        fullName: "Amit Potdukhe",
        PRN: 16,
        totalAttendance: 30,
    },
    {
        id: 5,
        fullName: "Prajwal Bhasme",
        PRN: 22,
        totalAttendance: 30,
    },
    {
        id: 6,
        fullName: "Saransh Jaiswal",
        PRN: 150,
        totalAttendance: 30,
    },
    {
        id: 7,
        fullName: "Tosh Tonpe",
        PRN: 44,
        totalAttendance: 30,
    },
    {
        id: 8,
        fullName: "Dipak Matte",
        PRN: 36,
        totalAttendance: 30,
    },
    {
        id: 9,
        fullName: "Tanushree Dongale",
        PRN: 65,
        totalAttendance: 30,
    },
];

export default function Table() {
    return (
        <Box sx={{ height: 600, width: "100%" }}>
            <Typography>List of all students</Typography>
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
