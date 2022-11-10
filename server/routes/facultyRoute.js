import express from "express";
import Faculty from "../models/facultyModel.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res, next) => {
    const faculties = await Faculty.find();
    if (!faculties) {
        next(new Error("Cannot fetch faculties"));
    } else {
        res.status(200).json({ faculties });
    }
});

router.route("/signup").post(async (req, res, next) => {
    const { facultyName, role, password, email } = req.body;

    const facultyUser = await Faculty.findOne({ email });

    if (facultyUser) {
        next(new Error("Faculty already exist"));
    } else {
        const newFaculty = await Faculty.create({
            facultyName,
            role,
            password,
            email,
        });

        if (newFaculty) {
            res.status(201).json({
                _id: newFaculty._id,
                facultyName: newFaculty.facultyName,
                role: newFaculty.role,
                email: newFaculty.email,
                token: null,
            });
        } else {
            next(
                new Error(
                    "Invalid Faculty details, Please enter correct details"
                )
            );
        }
    }
});

router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    const user = await Faculty.findOne({ email });

    if (user && (await user.password) === password) {
        res.json({
            _id: user._id,
            facultyName: user.name,
            role: user.role,
            email: user.email,
            token: null,
        });
    } else {
        next(new Error("Email or password is incorrect!"));
    }
});

export default router;
