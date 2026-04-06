const express = require("express");
const connectDB = require("./config/db");
const patientRoutes = require("./routes/patients");

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use("/api/patients", patientRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Medical laboratory system API");
});

// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
  console.error("Global error:", err.message);

  res.status(err.statusCode || 500).json({
    error: err.message || "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
