import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    school:String,
    grade:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model("Student",StudentSchema);
export default Student;