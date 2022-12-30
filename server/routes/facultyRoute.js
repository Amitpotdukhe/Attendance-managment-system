import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import db from "../config/db.js";
import store from "store";
import url from "url";
import { LocalStorage } from "node-localstorage";

var localStorage = new LocalStorage("./users");
const router = express.Router();

router.post("/faculty/login", async (req, res, next) => {
    const data = req.body;
    let obj;

    await db.query(
        `select FACULTY_ID,FACULTY_FIRST_NAME,FACULTY_LAST_NAME, FACULTY_ROLE, FACULTY_PASSWORD, FACULTY_EMAIL  from faculty where faculty.FACULTY_EMAIL='${data[0]}'`,

        (err, result, fields) => {
            obj = Object.values(JSON.parse(JSON.stringify(result)));

            if (result.length === 0) {
                res.status(200).json({
                    message: "Faculty doesn`t exist",
                    status: false,
                });
            } else if (obj[0].FACULTY_PASSWORD !== data[1]) {
                res.status(200).json({
                    message: "Wrong Password",
                    status: false,
                });
            } else if (err) {
                console.log(err);
                next(new Error(err));
            } else {
                localStorage.setItem("user", data);
                res.status(200).json({ data: data, status: true });
            }
        }
    );
});

router.get("/faculty/curruser", (req, res) => {
    console.log("sda");
});

router.post("/faculty/mark-attendance", async (req, res, next) => {
    const data = req.body;

    await db.query(
        `insert into attendance (ATTENDANCE_ID, STUDENT_REF_ID, SESSION_SEMESTER_DEPARTMENT_REF_ID, FACULTY_SUBJECT_REF_ID, LECTURE_DATE, ATTENDANCE_STATUS ) values (?, ?, ?, ?, ?, ?);`,
        data,
        (err, result, fields) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Attendance added sucessfully");
            }
        }
    );
});

router.get("/faculty/get-att", async (req, res, next) => {
    const id = "1946491245004";

    await db.query(
        "select * from attendance where STUDENT_REF_ID = 1946491245004",
        (err, result, fields) => {
            if (err) {
                next(new Error(err));
            } else {
                console.log(result);
                res.status(200).json(result);
            }
        }
    );
});

// --------------------> Subject Table Routes ----------------------------------->

router.post("/faculty/add-subjects", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query(
        "INSERT into subjects (SUBJECT_ID, SUBJECT_NAME) values (?, ?);",
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

router.get("/faculty/get-subjects", async (req, res, next) => {
    await db.query("select * from subjects", data, (err, result) => {
        if (err) {
            next(new Error(err));
        } else {
            res.status(200).json(result);
        }
    });
});

router.put("/faculty/update-subjects/:id", async (req, res, next) => {
    const data = [req.body.SUBJECT_NAME, req.params.id];
    console.log(data);
    await db.query(
        "UPDATE subjects SET SUBJECT_NAME = ? where SUBJECT_ID = ?",
        data,
        (err, result) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Subjects Updated sucessfully");
            }
        }
    );
});

router.delete("/faculty/delete-subjects/:id", async (req, res, next) => {
    const data = [req.body.SUBJECT_NAME, req.params.id];
    console.log(data);
    await db.query(
        "DELETE FROM subjects where SUBJECT_ID = " + req.params.id,
        data,
        (err, result) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Subjects Deleted sucessfully");
            }
        }
    );
});

export default router;
