// Models/User.js
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  otp: { type: String, default: null },
  otpExpires: { type: Date, default: null }
}, { timestamps: true });

module.exports = model("User", userSchema);
