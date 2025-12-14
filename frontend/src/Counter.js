import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Manasa");

  // 1️⃣ Runs after every render
  useEffect(() => {
    console.log("useEffect 1: Component rendered or updated");
  });

  // 2️⃣ Runs only once when component mounts
  useEffect(() => {
    console.log("useEffect 2: Component mounted");
  }, []);

  // 3️⃣ Runs when 'count' changes
  useEffect(() => {
    console.log(`useEffect 3: Count changed to ${count}`);
  }, [count]);

  // 4️⃣ Cleanup example: runs when component unmounts or before re-running effect
  useEffect(() => {
    console.log("useEffect 4: Timer started");
    const timer = setInterval(() => {
      console.log("Timer tick: ", count);
    }, 2000);

    return () => {
      clearInterval(timer);
      console.log("useEffect 4: Timer cleared (cleanup)");
    };
  }, [count]); // resets timer whenever 'count' changes

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <h2>Name: {name}</h2>
      <button onClick={() => setName(name === "Manasa" ? "Priyanka" : "Manasa")}>
        Change Name
      </button>
    </div>
  );
}

export default Counter;
 