const express = require("express");
const router = express.Router();
const AppError = require("../utils/AppError");

router.get("/", async (req, res) => {
  try {
    return res.status(200).json({
      message: "Patients list received successfully",
    });
  } catch (error) {
    console.error("Error fetching patients:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.fullName) {
      throw new AppError("Full name is required", 400);
    }

    return res.status(201).json({
      message: "Patient created successfully",
    });
  } catch (error) {
    console.error("Error creating patient:", error.message);

    return res.status(error.statusCode || 500).json({
      error: error.message || "Internal server error",
    });
  }
});

module.exports = router;
