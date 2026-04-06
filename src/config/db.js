const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27017/medical_lab";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
