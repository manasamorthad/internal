const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = "mysecretkey";

/* ---------- Login Route ---------- */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

/* ---------- Middleware to Verify JWT ---------- */
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(403);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(401);
    req.user = user;
    next();
  });
};

/* ---------- Protected Route ---------- */
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});