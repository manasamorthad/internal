const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  users.push({ username, password });
  res.json({ message: "Registration successful" });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`)});
 