const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api/calc/:operation", (req, res) => {
  const { operation } = req.params;
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Missing or invalid numbers" });
  }

  let result;
  switch (operation) {
    case "add": result = num1 + num2; break;
    case "subtract": result = num1 - num2; break;
    case "multiply": result = num1 * num2; break;
    case "divide":
      if (num2 === 0) return res.status(400).json({ error: "Cannot divide by zero" });
      result = num1 / num2;
      break;
    default: return res.status(400).json({ error: "Invalid operation" });
  }

  res.json({ result });
});

app.listen(3000, () => console.log("API running on port 3000")); 