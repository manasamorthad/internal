// studentRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Students");
});

router.get("/details", (req, res) => {
  res.send("Student Details");
});

module.exports = router;
