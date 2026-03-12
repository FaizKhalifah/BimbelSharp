import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
    assignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment'
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    score: Number,
    feedback: String,
    submittedAt: Date
});

const Submission = mongoose.model('Submission',SubmissionSchema);
export default Submission;