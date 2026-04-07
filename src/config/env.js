require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || "mongodb://127.0.0.1:27017/medical_lab_dev",
};

module.exports = config;
