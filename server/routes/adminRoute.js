import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import db from "../config/db.js";

const router = express.Router();

router.put("/add-faculty", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query(
        "INSERT faculty SET FACULTY_FIRST_NAME=?, FACULTY_LAST_NAME=?, FACULTY_ROLE=?, FACULTY_EMAIL=?, PASSWORD=?",
        data,
        (err, result) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Faculty added sucessfully");
            }
        }
    );
});

router.put("/add-subjects", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query(
        "INSERT subjects SET SUBJECT_NAME=?",
        data,
        (err, result, fields) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Subject added sucessfully");
            }
        }
    );
});

router.put("/add-students", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query(
        "INSERT students SET PRN=?, ROLL_NUMBER=?, STUDENT_FIRST_NAME=?, STUDENT_LAST_NAME=?, STUDENT_EMAIL=?",
        data,
        (err, result) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Student added sucessfully");
            }
        }
    );
});

export default router;
