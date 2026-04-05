const express = require("express");
const connectDB = require("./config/db");
const patientRoutes = require("./routes/patients");

const app = express();

connectDB();
app.use(express.json());

app.use("/api/patients", patientRoutes);

app.get("/", (req, res) => {
  res.send("Medical laboratory system API");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
