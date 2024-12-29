import mongoose, { model } from 'mongoose'

const userSchema = mongoose.Schema({

    fullName: {
        type: String,
        required: true,
        lowercase: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please provide a valid email address.'],
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
    },

    profilePic: {
        type: String,
        default: "",
        
    },

}, { timestamp: true} )

export const User = mongoose.model("User", userSchema)