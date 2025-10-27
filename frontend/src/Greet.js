import React, { useState } from "react";

function Greet() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    const res = await fetch(`http://localhost:3000/greet/${name}?title=${title}`);
    const data = await res.json();
    setMessage(data.greeting || data.error);
  };

  return (
    <div>
      <h3>Greeting App</h3>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={getGreeting}>Get Greeting</button>
      <p>{message}</p>
    </div>
  );
}

export default Greet;
