require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

const start = async () => {
  app.listen(PORT, () => {
    console.log(`server listening to PORT ${PORT}`)
  })
}

start()
