import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// Routes
import facultyRoute from "./routes/facultyRoute.js";
import studentRoute from "./routes/studentRoute.js";
app.use("/api/faculty", facultyRoute);
app.use("/api/student", studentRoute);

app.get("/", (req, res) => {
    res.send("Api is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
);
