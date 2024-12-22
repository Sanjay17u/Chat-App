import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        lowercase: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },

    password: {
        type: String,
        required: true,
        lowercase: true,
    },
    
    confirmPassword: {
        type: String,
    },
    
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)