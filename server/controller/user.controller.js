import { createTokenAndSaveCookie } from '../jwt/generateToken.js';
import { User } from '../models/users.model.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;
    try {
        if(password !== confirmPassword) {
            return res.status(400).json({
                error: "Password do not match" 
            })
        }
        const user = await User.findOne({ email })
        if(user) {
            return res.status(400).json({
                error: "User Already Registered"
            });
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await new User({
            fullname,
            email,
            password: hashPassword,
        })
        
        await newUser.save();

        if(newUser) {
            createTokenAndSaveCookie(newUser._id, res)
            res.status(201).json({
                message: "User Created Successfully",
                user:{
                    _id: newUser._id,
                    fullname: newUser.fullname,
                    email: newUser.email,
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Internal Server Error While Creating User Check User Controller."
        })       
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })

        console.log("Hashed password in DB:", user.password);
        console.log("Entered password:", password);
        
        const isMatch = await bcrypt.compare(password, user.password)
        console.log(isMatch)

       
        if(!user || !isMatch) {
            return res.status(400).json({
                error: "Invalid User Credentials"
            })
        }

        createTokenAndSaveCookie(user._id, res)

        res.status(200).json({
            message: "User logged in Successfully", 
            user:{
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            }
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Internal Server Error While Login Check Login Controller."
        });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt")
        res.status(200).json({
            message: "User Log Out Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "Internal Server Error While Login Check Logout Controller."
        })
    }
}