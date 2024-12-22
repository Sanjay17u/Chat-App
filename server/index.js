import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()


dotenv.config()
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

try {
    mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')
} catch (error) {
    console.log('MongoDB Error : ' , error)
}

import userRoute from './routes/user.route.js'

app.use("/api/v1/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server is Running On ${PORT}`)
})