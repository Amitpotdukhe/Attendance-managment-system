import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import facultyData from "./data/facultyData.js";
import studentData from "./data/studentData.js";
import Faculty from "./models/facultyModel.js";
import connectDB from "./config/db.js";
import Student from "./models/studentModel.js";

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Faculty.deleteMany();
        await Student.deleteMany();

        const createdUsers = await Faculty.insertMany(facultyData);
        const createdStudents = await Student.insertMany(studentData);
        const adminUser = createdUsers[0]._id;

        console.log("Data Imported!!!".green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit();
    }
};

importData();
