import mongoose from "mongoose";


const CourseSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true,
        unique:true
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],

    finalGrades: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        },
            grade: Number
    }],
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Course = mongoose.model("Course",CourseSchema);
export default Course;