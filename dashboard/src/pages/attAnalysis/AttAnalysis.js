import axios from "axios";
import React, { useEffect } from "react";

const facultySubjectIds = [
    {
        id: "1001",
        subId: "3001",
        subject: "Blockchain Technology",
        faculty: "Sandesh Jain",
        email: "sandesh.jain@bitwardha.ac.in",
    },
    {
        id: "1002",
        subId: "3002",
        subject: "Big Data Analytics",
        faculty: "Abhishek Kinhekar",
        email: "abhishek.kinhekar@bitwardha.ac.in",
    },
    {
        id: "1003",
        subId: "3003",
        subject: "Software Engineering",
        faculty: "Sheetal Kale",
        email: "sheetal.kale@bitwardha.ac.in",
    },
    {
        id: "1004",
        subId: "3004",
        subject: "Cloud Computing",
        faculty: "Akshay Saraf",
        email: "akshay.saraf@bitwardha.ac.in",
    },
    {
        id: "1005",
        subId: "3005",
        subject: "System Administration",
        faculty: "Ajay Sahu",
        email: "ajay.sahu@bitwardha.ac.in",
    },
    {
        id: "1006",
        subId: "3006",
        subject: "Full Stack Development",
        faculty: "Aihtesham Kazi",
        email: "aihtesham.kazi@bitwardha.ac.in",
    },
];

const AttAnalysis = () => {
    const fEmail = localStorage.getItem("user").split(",")[0];
    var x;
    facultySubjectIds.forEach((item) => {
        if (fEmail === item.email) {
            x = item.subId;
        }
    });

    // const currSubject = localStorage.getItem("user").split(",")[]
    // const [data, setData] = useEffect();
    // useEffect(async () => {
    //     const req = await axios.get();
    // }, []);

    return <div>AttAnalysis</div>;
};

export default AttAnalysis;
