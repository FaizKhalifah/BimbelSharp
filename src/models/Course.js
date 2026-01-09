import mongoose from "mongoose";


const CourseSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Course = mongoose.model("Course",CourseSchema);
export default Course;