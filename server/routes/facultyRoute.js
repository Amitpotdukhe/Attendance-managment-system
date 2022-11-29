import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import db from "../config/db.js";

const router = express.Router();

router.get("/add-master", async (req, res) => {
    // const {year, }
});

router.post("/add-subjects", async (req, res, next) => {
    const { ffn, fln, role, email } = req.body;

    await db.query(
        `INSERT INTO faculty (FACULTY_FIRST_NAME, FACULTY_LAST_NAME, FACULTY_ROLE, FACULTY_EMAIL) VALUES (${ffn}, ${fln}, ${role}, ${email});`,
        (err, result) => {
            if (err) {
                next(new Error(err));
            } else {
                res.status(200).json("Subject added sucessfully");
            }
        }
    );
});

// router.get("/", protect, async (req, res, next) => {
//     const faculties = await Faculty.find();
//     if (!faculties) {
//         next(new Error("Cannot fetch faculties"));
//     } else {
//         res.status(200).json({ faculties });
//     }
// });

// router.route("/signup").post(async (req, res, next) => {
//     const { facultyName, role, password, email } = req.body;

//     const facultyUser = await Faculty.findOne({ email });

//     if (facultyUser) {
//         next(new Error("Faculty already exist"));
//     } else {
//         const newFaculty = await Faculty.create({
//             facultyName,
//             role,
//             password,
//             email,
//         });

//         if (newFaculty) {
//             res.status(201).json({
//                 _id: newFaculty._id,
//                 facultyName: newFaculty.facultyName,
//                 role: newFaculty.role,
//                 email: newFaculty.email,
//                 token: null,
//             });
//         } else {
//             next(
//                 new Error(
//                     "Invalid Faculty details, Please enter correct details"
//                 )
//             );
//         }
//     }
// });

// router.post("/login", async (req, res, next) => {
//     const { email, password } = req.body;

//     const user = await Faculty.findOne({ email });

//     if (user && (await user.password) === password) {
//         res.json({
//             _id: user._id,
//             facultyName: user.name,
//             role: user.role,
//             email: user.email,
//             token: null,
//         });
//     } else {
//         next(new Error("Email or password is incorrect!"));
//     }
// });

// router.post("/mark-attendance", async (req, res) => {
//     const { subject, email, attendance } = req.body;

//     const curStudentAttendace = await Attendance.findOne({ email });
//     curStudentAttendace = curStudentAttendace.attendance.forEach(
//         (curStudent) => {
//             if (curStudent.isPresent) {
//                 curStudentAttendace.total += 1;
//                 curStudent.dates.push({ date: new Date(), isPresent: true });
//             } else {
//                 curStudent.dates.push({ dates: new Date(), isPresent: false });
//             }
//         }
//     );

//     await curStudentAttendace.save();
// });

export default router;
