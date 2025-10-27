const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/info", (req, res) => {
  res.json({ message: "Server Information Route Accessed" });
});

app.get("/status", (req, res) => {
  const timestamp = new Date().toISOString();
  res.json({ status: "Server is running", timestamp });
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
