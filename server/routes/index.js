const express = require("express")
const router = express.Router()

router.get("/send-mail", (req, res) => {
  res.status("200").json({ success: true })
})

router.post("/register", (req, res) => {
  res.status("200").json({ success: true })
})

router.post("/login", (req, res) => {
  res.status("200").json({ success: true })
})

module.exports = router
