import { MongoGCPError } from "mongodb";
import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },

  status: {
    type: String,
    enum: ['active', 'completed', 'dropped'],
    default: 'active'
  },

  enrolledAt: {
    type: Date,
    default: Date.now
  }
});

const Enrollment = mongoose.model("Enrollment",EnrollmentSchema);
export default Enrollment;
