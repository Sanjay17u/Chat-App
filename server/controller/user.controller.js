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
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await new User({
            fullname,
            email,
            password: hashPassword,
        })
        await newUser.save()
        res.status(201).json({
            message: "User Created Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Internal Server Error While Creating User Check User Controller."
        })       
    }
}