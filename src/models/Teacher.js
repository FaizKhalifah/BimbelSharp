import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    specialization: String,
    createdAt: {
        type: Date,
        default: Date.now
  }
})

const Teacher = mongoose.model("Teacher",TeacherSchema);
export default Teacher;