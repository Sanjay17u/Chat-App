import express from 'express'
const app = express()


import dotenv from 'dotenv'
dotenv.config()


app.get("/", (req, res) => {
    res.send("Hello Bhai")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is Running On ${process.env.PORT}`)
})