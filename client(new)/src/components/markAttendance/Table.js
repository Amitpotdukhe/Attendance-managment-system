import * as React from "react";
import { Box, Typography } from "@mui/material/";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "RollNo", width: 90 },
    {
        field: "firstName",
        headerName: "First name",
        width: 150,
        editable: true,
    },
    {
        field: "lastName",
        headerName: "Last name",
        width: 150,
        editable: true,
    },
    {
        field: "PRN",
        headerName: "PRN",
        type: "number",
        width: 90,
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
        lastName: "Snow",
        firstName: "Jon",
        PRN: 35,
        Status: "P",
        totalAttendance: 30,
    },
    {
        id: 2,
        lastName: "Lannister",
        firstName: "Cersei",
        PRN: 42,
        Status: "P",
        totalAttendance: 30,
    },
    {
        id: 3,
        lastName: "Lannister",
        firstName: "Jaime",
        PRN: 45,
        Status: "P",
        totalAttendance: 30,
    },
    {
        id: 4,
        lastName: "Stark",
        firstName: "Arya",
        PRN: 16,
        Status: "A",
        totalAttendance: 30,
    },
    {
        id: 5,
        lastName: "Targaryen",
        firstName: "Daenerys",
        PRN: 22,
        Status: "P",
        totalAttendance: 30,
    },
    {
        id: 6,
        lastName: "Melisandre",
        firstName: null,
        PRN: 150,
        Status: "A",
        totalAttendance: 30,
    },
    {
        id: 7,
        lastName: "Clifford",
        firstName: "Ferrara",
        PRN: 44,
        Status: "P",
        totalAttendance: 30,
    },
    {
        id: 8,
        lastName: "Frances",
        firstName: "Rossini",
        PRN: 36,
        Status: "A",
        totalAttendance: 30,
    },
    {
        id: 9,
        lastName: "Roxie",
        firstName: "Harvey",
        PRN: 65,
        Status: "A",
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
