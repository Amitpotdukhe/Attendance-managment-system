import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
    facultyName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "faculty",
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

const Faculty = mongoose.model("Faculty", facultySchema);

export default Faculty;
