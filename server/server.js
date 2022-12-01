// Packages
import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// Routes & configs
import facultyRoute from "./routes/facultyRoute.js";
import studentRoute from "./routes/studentRoute.js";
import adminRoute from "./routes/adminRoute.js";
import db from "./config/db.js";

// Middlewares
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { protect } from "./middleware/authMiddleware.js";

// app.use(protect);
app.use("/api/faculty", facultyRoute);
app.use("/api/student", studentRoute);
app.use("/api/admin", adminRoute);

// connectDB();

app.get("/", (req, res) => {
    res.send("Api is running...");
});

// Custom Error Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
);
