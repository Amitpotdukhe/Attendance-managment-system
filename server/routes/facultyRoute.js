import express from "express";
import facultyData from "../data/facultyData.js";

const router = express.Router();

router.route("/").get((req, res) => {
    res.json(facultyData);
});

export default router;
