import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, required: true 
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['admin', 'teacher', 'student'],
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("Student",UserSchema);
export default User;