// server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow frontend requests

const studentRoutes = require("./studentRoutes");
const teacherRoutes = require("./teacherRoutes");

app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
