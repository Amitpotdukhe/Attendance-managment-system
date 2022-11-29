import express from "express";

const router = express.Router();

router.route("/login").get((req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });
});

router.route("/signup").get((req, res) => {});

export default router;
