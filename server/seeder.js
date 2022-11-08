import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import facultyData from "./data/facultyData.js";
import Faculty from "./models/facultyModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Faculty.deleteMany();

        const createdUsers = await Faculty.insertMany(facultyData);
        const adminUser = createdUsers[0]._id;

        console.log("Data Imported!!!".green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
    }
};

importData();
