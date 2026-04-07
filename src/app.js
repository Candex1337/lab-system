const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const config = require("./config/env");
const patientRoutes = require("./routes/patients");

const app = express();

connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/patients", patientRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});