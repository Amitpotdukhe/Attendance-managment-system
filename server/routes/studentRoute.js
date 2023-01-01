import express from "express";
import db from "../config/db.js";
import { LocalStorage } from "node-localstorage";

const router = express.Router();
var localStorage = new LocalStorage("./users/student");
router.post("/student/login", async (req, res, next) => {
    const data = req.body;
    let obj;
    console.log(data);
    await db.query(
        `select PRN, ROLL_NUMBER, STUDENT_FIRST_NAME, STUDENT_LAST_NAME, STUDENT_EMAIL, STUDENT_PASSWORD from students where students.STUDENT_EMAIL='${data[0]}'`,
        (err, result, fields) => {
            obj = Object.values(JSON.parse(JSON.stringify(result)));

            if (result.length === 0) {
                res.status(200).json("Student doesn`t exist");
            } else if (obj[0].STUDENT_PASSWORD !== data[1]) {
                res.status(200).json("Wrong Password");
            } else if (err) {
                console.log(err);
                next(new Error(err));
            } else {
                localStorage.setItem("student", data);
                res.status(200).json({ data: data, status: true });
            }
        }
    );
});

router.get("/student/get-info/:id");

router.route("/signup").get((req, res) => {});

export default router;
