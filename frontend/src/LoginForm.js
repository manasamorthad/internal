//7
import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const validUser = "admin";
    const validPass = "1234";

    if (username === validUser && password === validPass) {
      setMessage("✅ Login successful!");
    } else {
      setMessage("❌ Invalid username or password.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>🔐 Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: 10 }}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin} style={{ marginTop: 10 }}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default LoginForm; 