require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const connectDB = require("./db/connect")
const routes = require("./routes")

//Global Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use("/api/v1", routes)

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
