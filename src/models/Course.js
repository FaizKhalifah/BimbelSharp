import mongoose from "mongoose";
import { Schema } from "mongoose";

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true},
    students:{type:Array},
    schedule: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

const Course = mongoose.model("Course",courseSchema);
export default Course;