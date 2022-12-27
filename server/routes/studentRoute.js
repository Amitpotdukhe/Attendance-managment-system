import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/student/login", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query(
        `select PRN, ROLL_NUMBER, STUDENT_FIRST_NAME, STUDENT_LAST_NAME, STUDENT_EMAIL, STUDENT_PASSWORD from students where students.STUDENT_EMAIL='${data[0]}'`,
        (err, result, fields) => {
            if (err) {
                console.log(err);
                next(new Error(err));
            } else {
                // localStorage.setItem("user", data);
                res.status(200).json({data: data, status: true} );
            }
        } 
    )
});

router.route("/signup").get((req, res) => {});

export default router;
