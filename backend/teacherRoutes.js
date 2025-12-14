// teacherRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Teachers");
});

router.get("/details", (req, res) => {
  res.send("Teacher Details");
});

module.exports = router;
