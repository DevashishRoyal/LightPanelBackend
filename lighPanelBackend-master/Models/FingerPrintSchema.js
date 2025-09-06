const mongoose = require("mongoose");

const fingerprintSchema = new mongoose.Schema({
  fingerprint: { type: String, required: true, unique: true },
});

const Fingerprint = mongoose.model("Fingerprint", fingerprintSchema);

module.exports = Fingerprint;
