const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "API works" });
});

app.listen(3000, () => {
  console.log("Server started");
});
