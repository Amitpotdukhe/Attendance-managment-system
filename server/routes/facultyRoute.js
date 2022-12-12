import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import db from "../config/db.js";
import store from "store";
import { LocalStorage } from "node-localstorage";

var localStorage = new LocalStorage("./users");
const router = express.Router();

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

router.post("/login", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    await db.query(
        `select FACULTY_ID,FACULTY_FIRST_NAME,FACULTY_LAST_NAME, FACULTY_ROLE,FACULTY_EMAIL  from faculty where faculty.FACULTY_EMAIL='${data[0]}'`,
        (err, result, fields) => {
            if (err) {
                console.log(err);
                next(new Error(err));
            } else {
                store.set("user", { name: "amir" });
                localStorage.setItem("user", data);
                res.status(200).json(result);
            }
        }
    );
});

router.get("curruser", (req, res) => {});

router.post("/mark-attendance", (req, res, next) => {
    const data = req.body;
    console.log(data);
    console.log(localStorage.getItem("user")[0]);
});

export default router;
