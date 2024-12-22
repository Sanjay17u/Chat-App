const express = require('express')
const app = express()


const dotenv = require('dotenv')
dotenv.config()


app.get("/", (req, res) => {
    res.send("Hello Bhai")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is Running On ${process.env.PORT}`)
})