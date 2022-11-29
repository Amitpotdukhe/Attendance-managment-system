import mongoose from "mongoose";

const attendanceSchema = mongoose.Schema({
    email: String,
    subjects: [
        {
            subjectId: String,
            subjectName: String,
            total: Number,
            dates: [
                {
                    date: Date,
                    isPresent: Boolean,
                },
            ],
        },
    ],
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
