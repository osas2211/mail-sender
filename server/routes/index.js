const express = require("express")
const { register, sendMail, login } = require("../controllers")
const router = express.Router()

router.post("/register", register)

router.post("/login", login)

router.get("/send-mail", sendMail)

module.exports = router
