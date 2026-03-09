import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,

    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Assignment = mongoose.model('Assignment',AssignmentSchema);
export default Assignment;