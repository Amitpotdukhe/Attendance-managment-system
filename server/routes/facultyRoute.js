import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import db from "../config/db.js";
import store from "store";
import { LocalStorage } from "node-localstorage";

var localStorage = new LocalStorage("./users");
const router = express.Router();

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
