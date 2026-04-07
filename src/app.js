const express = require("express");
const connectDB = require("./config/db");
const config = require("./config/env");
const patientRoutes = require("./routes/patients");

const app = express();

connectDB();

app.use(express.json());
app.use("/api/patients", patientRoutes);

app.get("/", (req, res) => {
  res.status(200).send(`Medical laboratory system API (${config.env})`);
});

app.use((err, req, res, next) => {
  console.error("Global error:", err.message);

  res.status(err.statusCode || 500).json({
    error: err.message || "Internal server error",
  });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port} in ${config.env} mode`);
});
