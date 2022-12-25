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

router.get("/faculty/curruser", (req, res) => {});

router.post("/faculty/mark-attendance", protect, (req, res, next) => {
    var url_parts = url.parse(req.url);
    console.log(url_parts);
    console.log(url_parts.pathname.split("/")[1]);
    const data = req.body;
    console.log(data);
    const x = localStorage.getItem("user").split(",");
    console.log(x[0]);
});

export default router;
