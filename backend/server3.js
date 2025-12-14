const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Middleware
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toLocaleTimeString());
  next();
});

// Route
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(5000, () => console.log("Server running on port 5000"));   