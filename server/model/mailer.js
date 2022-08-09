const mongoose = require("mongoose")

const mailerSchema = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    required: true,
  },
  userName: {
    unique: true,
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
})

module.exports = mongoose.model("mailer", mailerSchema)
