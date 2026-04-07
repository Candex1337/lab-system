const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find().sort({ createdAt: -1 });
    return res.status(200).json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { fullName, birthDate, phone } = req.body;

    if (!fullName || !birthDate || !phone) {
      return res.status(400).json({
        error: "fullName, birthDate and phone are required",
      });
    }

    const patient = await Patient.create({
      fullName,
      birthDate,
      phone,
    });

    return res.status(201).json(patient);
  } catch (error) {
    console.error("Error creating patient:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;