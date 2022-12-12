import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import db from "../config/db.js";

const router = express.Router();

// --------------------> Faculty Table Routes ----------------------------------->

router.post("/add-faculty", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query("INSERT into faculty SET ?", data, (err, result) => {
        if (err) {
            next(new Error(err));
        } else {
            res.status(200).json("Faculty added sucessfully");
        }
    });
});

router.get("/get-faculty", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query("select * from faculty", data, (err, result) => {
        if (err) {
            next(new Error(err));
        } else {
            res.status(200).json(result);
        }
    });
});

router.put("/update-faculty/:id", async (req, res, next) => {
    const data = [
        req.body.FACULTY_FIRST_NAME,
        req.body.FACULTY_LAST_NAME,
        req.body.FACULTY_ROLE,
        req.body.FACULTY_EMAIL,
        req.params.id,
    ];
    console.log(data);
    await db.query(
        "UPDATE faculty SET FACULTY_FIRST_NAME = ?, FACULTY_LAST_NAME = ?, FACULTY_ROLE = ?, FACULTY_EMAIL = ? where FACULTY_ID = ?",
        data,
        (err, result) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Faculty Updated sucessfully");
            }
        }
    );
});

router.delete("/delete-faculty/:id", async (req, res, next) => {
    const data = [
        req.body.FACULTY_FIRST_NAME,
        req.body.FACULTY_LAST_NAME,
        req.body.FACULTY_ROLE,
        req.body.FACULTY_EMAIL,
        req.params.id,
    ];
    console.log(data);
    await db.query(
        "DELETE FROM FACULTY where FACULTY_ID = " + req.params.id,
        data,
        (err, result) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Faculty Deleted sucessfully");
            }
        }
    );
});

// --------------------> Subject Table Routes ----------------------------------->

router.post("/add-subjects", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query(
        "INSERT into subjects SET ?",
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

router.get("/get-subjects", async (req, res, next) => {
    await db.query("select * from subjects", data, (err, result) => {
        if (err) {
            next(new Error(err));
        } else {
            res.status(200).json(result);
        }
    });
});

router.put("/update-subjects/:id", async (req, res, next) => {
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

router.delete("/delete-subjects/:id", async (req, res, next) => {
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

// --------------------> Students Table Routes ----------------------------------->

// router.post("/add-students", async (req, res, next) => {
//     const data = req.body;
//     console.log(data);
//     await db.query(
//         "INSERT into students SET ?",
//         data,
//         (err, result) => {
//             if (err) {
//                 next(new Error(err));
//             } else {
//                 res.status(200).json("Student added sucessfully");
//             }
//         }
//     );
// });

// router.get("/get-students", async (req, res, next) => {
//     const data = req.body;
//     console.log(data);
//     await db.query(
//         "select * from students",
//         data,
//         (err, result) => {
//             if (err) {
//                 next(new Error(err));
//             } else {
//                 res.status(200).json(result);
//             }
//         }
//     );
// });

// router.put("/update-students/:id", async (req, res, next) => {
//     const data = [req.body.ROLL_NUMBER, req.body.STUDENT_FIRST_NAME, req.body.STUDENT_LAST_NAME, req.body.STUDENT_EMAIL, req.body.id];
//     console.log(data);
//     await db.query(
//         "UPDATE students SET ROLL_NUMBER = ?, STUDENT_FIRST_NAME = ?, STUDENT_LAST_NAME = ?, STUDENT_EMAIL = ? where PRN = ?",
//         data,
//         (err, result) => {
//             if (err) {
//                 next(new Error(err));
//             } else {
//                 res.status(200).json("Student updated successfully");
//             }
//         }
//     );
// });

// router.delete("/delete-student/:id", async (req, res, next) => {
//     const data = [req.body.STUDENT_FIRST_NAME, req.body.STUDENT_LAST_NAME, req.body.ROLL_NUMBER, req.body.STUDENT_EMAIL, req.params.id];
//     console.log(data);
//     await db.query(
//         "DELETE FROM students where PRN = " + req.params.id,
//         data,
//         (err, result) => {
//             if (err) {
//                 next(new Error(err));
//             } else {
//                 res.status(200).json("Students Deleted sucessfully");
//             }
//         }
//     );
// });

// --------------------> Departments Table Routes ----------------------------------->
router.post("/add-departments", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query("INSERT into departments SET ?", data, (err, result) => {
        if (err) {
            next(new Error(err));
        } else {
            res.status(200).json("department added sucessfully");
        }
    });
});

router.get("/get-departments", async (req, res, next) => {
    await db.query("select * from departments", data, (err, result) => {
        if (err) {
            next(new Error(err));
        } else {
            res.status(200).json(result);
        }
    });
});

router.put("/update-departments/:id", async (req, res, next) => {
    const data = [req.body.DEPARTMENT_NAME, req.params.id];
    console.log(data);
    await db.query(
        "UPDATE departments SET DEPARTMENT_NAME = ? where DEPARTMENT_ID = ?",
        data,
        (err, result) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Departments Updated sucessfully");
            }
        }
    );
});

router.delete("/delete-departments/:id", async (req, res, next) => {
    const data = [req.body.DEPARTMENT_NAME, req.params.id];
    console.log(data);
    await db.query(
        "DELETE FROM departments where DEPARTMENT_ID = " + req.params.id,
        data,
        (err, result) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Departments deleted sucessfully");
            }
        }
    );
});

export default router;
