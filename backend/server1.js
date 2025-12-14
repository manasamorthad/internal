const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET = "secretkey";

// Dummy user (for demo)
const USER = {
  username: "rahul",
  password: "1234"
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/protected", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    jwt.verify(token, SECRET);
    res.json({ message: "Access granted" });
  } catch (err) {
    res.status(403).json({ message: "Access denied" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
