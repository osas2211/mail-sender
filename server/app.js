require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`server listening to PORT ${PORT}`)
    })
  } catch (error) {
    console.log(error.message, "\nServer Crashed: MongoDB failed to connect")
  }
}

start()
