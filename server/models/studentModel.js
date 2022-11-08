import mongoose from "mongoose";

const subjectSchema = mongoose.Schema({
    subjectId: {
        type: String,
        required: true,
    },
    subjectName: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    dates: [
        {
            date: Date,
            isPresent: Boolean,
        },
    ],
});

const semisterSchema = mongoose.Schema({
    semisterNumber: {
        type: Number,
        required: true,
    },
    totalAttendance: {
        type: Number,
        required: true,
    },
    subject: [subjectSchema],
});

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
        required: true,
    },
    prn: {
        type: String,
        required: true,
    },
    semisters: [semisterSchema],
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
