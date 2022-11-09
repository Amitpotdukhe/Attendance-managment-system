import express from "express";
import studentData from "../data/studentData.js";
import studentModel from "../models/studentModel.js";

const router = express.Router();

router.route("/").get(async (req, res, next) => {
    const students = await studentModel.find();

    if (!students) {
        next(new Error("Invalid!"));
    } else {
        res.status(200);
        res.json({ students });
    }
});

router.route("/login").get((req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });
});

router.route("/signup").get((req, res) => {});

export default router;
