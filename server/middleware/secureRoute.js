import jwt from 'jsonwebtoken'
import { User } from '../models/users.model.js'

const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token) {
            return res.status(401).json({
                error: "No token, authorization denied"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded) {
            return res.status(401).json({
                error: "Invalid Token"
            }) 
        }
        
        const user = await User.findById(decoded.userId).select("-password")
        if(!user) {
            return res.status(401).json({
                error: "No user found"
            })
        }

        req.user = user
        next()

    } catch (error) {
        console.log("Error came from seureRoute: ", error)
        res.status(500).json({
            error: "secureRoute Error."
        })
    }
}

export default secureRoute