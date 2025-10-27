import React, { useState } from "react";

function ServerStatus() {
  const [message, setMessage] = useState("");

  const getInfo = async () => {
    const res = await fetch("http://localhost:3000/info");
    const data = await res.json();
    setMessage(data.message);
  };

  const getStatus = async () => {
    const res = await fetch("http://localhost:3000/status");
    const data = await res.json();
    setMessage(`${data.status} at ${data.timestamp}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Server Info & Status</h2>
      <button onClick={getInfo}>Get Info</button>
      <button onClick={getStatus} style={{ marginLeft: "10px" }}>
        Get Status
      </button>
      <p>{message}</p>
    </div>
  );
}

export default ServerStatus;
