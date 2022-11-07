import express from "express";
import studentData from "../data/studentData.js";

const router = express.Router();

router.route("/").get((req, res) => {
    res.json(studentData);
});

router.route("/login").get((req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });
});

router.route("/signup").get((req, res) => {
    
});

export default router;
