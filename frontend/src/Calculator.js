import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: "10px" }}
      /><br/>

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: "10px" }}
      />
      <br />

      <button onClick={add} style={{ margin: "5px" }}>Add</button>
      <button onClick={subtract} style={{ margin: "5px" }}>Subtract</button>
      <button onClick={multiply} style={{ margin: "5px" }}>Multiply</button>
      <button onClick={divide} style={{ margin: "5px" }}>Divide</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
