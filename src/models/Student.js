import mongoose from "mongoose";
import { Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    courses:{type: Array}, 
    email: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student",studentSchema);
export default Student;