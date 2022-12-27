import express from "express";

const router = express.Router();

router.post("/student/login", async (req, res, next) => {
    const data = req.body;
    console.log(data);
    res.status(200).json("aysgfduytdf gbdasf uygveya ");
});

router.route("/signup").get((req, res) => {});

export default router;
