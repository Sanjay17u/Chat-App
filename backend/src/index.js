import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import authRoutes from './routes/auth.routes.js'
import { connectDB } from './lib/db.js'

const app = express()

const PORT = process.env.PORT

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`)
    connectDB()
})