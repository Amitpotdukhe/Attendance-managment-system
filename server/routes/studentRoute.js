import express from "express";
import studentData from "../data/studentData.js";

const router = express.Router();

router.route("/").get((req, res) => {
    res.json(studentData);
});

export default router;
