import React, { useState } from "react";

function Calc() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");

  const handleCalc = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/calc/${operation}?num1=${num1}&num2=${num2}`
      );
      const data = await res.json();
      setResult(data.result !== undefined ? `Result: ${data.result}` : data.error);
    } catch {
      setResult("Error connecting to server");
    }
  };

  return (
    <div>
      <h3>Simple Calculator</h3>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />{" "}
      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <br /><br />
      <button onClick={handleCalc}>Calculate</button>
      <p>{result}</p>
    </div>
  );
}

export default Calc;
