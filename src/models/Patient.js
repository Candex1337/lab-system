const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  fullName: String,
  birthDate: Date,
  phone: String
});

module.exports = mongoose.model("Patient", patientSchema);
