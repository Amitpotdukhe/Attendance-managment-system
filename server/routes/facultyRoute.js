import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import db from "../config/db.js";
import { LocalStorage } from "node-localstorage";

var localStorage = new LocalStorage("./users");
var localStorage2 = new LocalStorage("./users/facSubAna");
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

router.get("/faculty/get-att/:id", async (req, res, next) => {
    const id = req.params.id;
    localStorage2.clear;
    let allData;
    var subData = [];

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

    let currSub;
    facultySubjectIds.forEach(async (it) => {
        await db.query(
            `select * from attendance where STUDENT_REF_ID = ? and FACULTY_SUBJECT_REF_ID = ?;`,
            [id, it.id],
            (err, result, fields) => {
                if (err) {
                    next(new Error(err));
                } else {
                    allData = Object.values(JSON.parse(JSON.stringify(result)));

                    let pDays = [],
                        aDays = [];
                    allData.forEach((item) => {
                        if (item.ATTENDANCE_STATUS == "1") {
                            pDays.push(item.LECTURE_DATE);
                        } else {
                            aDays.push(item.LECTURE_DATE);
                        }
                    });
                    currSub = [
                        "start",
                        it.subject,
                        it.faculty,
                        allData.length,
                        pDays.length,
                        aDays.length,
                        pDays,
                        aDays,

                        (pDays.length / (pDays.length + aDays.length)) * 100,
                        "end",
                    ];

                    subData.push(currSub);
                    localStorage2.setItem(
                        "att",
                        localStorage2.getItem("att") + currSub
                    );
                }
            }
        );
    });
    console.log("Final :", subData);
    res.status(200).json(subData);
});

router.get(
    "/faculty/subject/:studentId/:facSubRefId",
    async (req, res, next) => {
        const prn = req.params.studentId;
        const facSubRefId = req.params.facSubRefId;

        await db.query(
            "select * from attendance where STUDENT_REF_ID = ? and FACULTY_SUBJECT_REF_ID = ?",
            [prn, facSubRefId],
            (err, result, fields) => {
                if (err) {
                    next(new Error(err));
                } else {
                    console.log(result);
                    const data = Object.values(
                        JSON.parse(JSON.stringify(result))
                    );
                    let p = 0;
                    let pDays = [];
                    let aDays = [];
                    let a = 0;
                    data.forEach((item) => {
                        if (item.ATTENDANCE_STATUS === "1") {
                            p++;
                            pDays.push(item.LECTURE_DATE);
                        } else {
                            a++;
                            aDays.push(item.LECTURE_DATE);
                        }
                    });
                    let avg = (p / (p + a)) * 100;
                    const calculatedData = {
                        totalDays: result.length,
                        totalPresentDays: p,
                        totalAbsentDays: a,
                        presentDays: pDays,
                        absentDays: aDays,
                        avgAttendance: avg,
                    };

                    res.status(200).json({
                        data: result,
                        calculatedData: calculatedData,
                    });
                }
            }
        );
    }
);

router.get("/faculty/subject-analysis/:facSubId", async (req, res, next) => {
    const id = req.params.facSubId;
    let allStudents;
    let newObj = [];

    await db.query("select * from students", (err, result) => {
        if (err) {
            next(new Error(err));
        } else {
            allStudents = Object.values(JSON.parse(JSON.stringify(result)));

            allStudents.forEach((item) => {
                let curr = [];
                db.query(
                    "select * from attendance where STUDENT_REF_ID = ? and FACULTY_SUBJECT_REF_ID = ?",
                    [item.PRN, id],
                    (err, result1) => {
                        if (err) {
                            next(new Error(err));
                        } else {
                            let x = Object.values(
                                JSON.parse(JSON.stringify(result1))
                            );
                            newObj.push(x);
                            // console.log(x);
                        }
                    }
                );

                // newObj.push(curr);
            });
        }
        console.log(newObj);
        console.log(newObj.length);
    });
});

router.post("/hod/login", async (req, res, next) => {
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
