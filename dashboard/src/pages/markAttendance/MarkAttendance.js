import { Divider, Grid, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";

const facultySubjectIds = [
    {
        id: "1001",
        subject: "Blockchain Technology",
        faculty: "Sandesh Jain",
        email: "sandesh.jain@bitwardha.ac.in",
    },
    {
        id: "1002",
        subject: "Big Data Analytics",
        faculty: "Abhishek Kinhekar",
        email: "abhishek.kinhekar@bitwardha.ac.in",
    },
    {
        id: "1003",
        subject: "Software Engineering",
        faculty: "Sheetal Kale",
        email: "sheetal.kale@bitwardha.ac.in",
    },
    {
        id: "1004",
        subject: "Cloud Computing",
        faculty: "Akshay Saraf",
        email: "akshay.saraf@bitwardha.ac.in",
    },
    {
        id: "1005",
        subject: "System Administration",
        faculty: "Ajay Sahu",
        email: "ajay.sahu@bitwardha.ac.in",
    },
    {
        id: "1006",
        subject: "Full Stack Development",
        faculty: "Aihtesham Kazi",
        email: "aihtesham.kazi@bitwardha.ac.in",
    },
];

const MarkAttendance = () => {
    const [students, setStudents] = useState();
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        axios
            .get(`/api/student/get-students`)
            .then((result) => setStudents(result.data));
    }, []);
    console.log(students);
    console.log(date);
    const fEmail = localStorage.getItem("user").split(",")[0];
    var x;
    facultySubjectIds.forEach((item) => {
        if (fEmail === item.email) {
            x = item.subject;
        }
    });
    return (
        <div style={{ width: "100%" }}>
            <Grid>
                <Typography variant="h4">Mark Attendance for {x}:</Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>Choose date:</Typography>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </Grid>
            <Grid>
                <Table />
            </Grid>
        </div>
    );
};

export default MarkAttendance;
