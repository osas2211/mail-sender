const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mailerModel = require("../model/mailer")

const register = async (req, res) => {
  const { email, userName, password } = req.body
  if (email && userName && password) {
    try {
      const encryptedPswd = await bcrypt.hash(password, 10)
      const mailerObj = {
        userName,
        email,
        password: encryptedPswd,
      }
      const mailer = await mailerModel.create(mailerObj)
      const token = jwt.sign(
        { id: mailer._id, userName: mailer.userName },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      )
      mailer.token = token
      return res.status(200).json({ success: true, mailer })
    } catch (error) {
      return res.status(200).json({ success: false, message: error.message })
    }
  } else {
    return res
      .status(200)
      .json({ success: false, message: "All fields are required" })
  }
}

const login = async (req, res) => {
  const { email, userName, password } = req.body
  if (userName && password) {
    try {
      const mailer = await mailerModel.findOne({ userName })
      await bcrypt.compare(password, mailer.password)
      const token = jwt.sign(
        { id: mailer._id, userName: mailer.userName },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      )
      mailer.token = token
      return res.status(200).json({ success: true, mailer })
    } catch (error) {
      return res.status(200).json({ success: false, message: error.message })
    }
  } else {
    return res
      .status(200)
      .json({ success: false, message: "All fields are required" })
  }
}

const sendMail = async (req, res) => {
  res.status("200").json({ success: true })
}

module.exports = {
  register,
  login,
  sendMail,
}
