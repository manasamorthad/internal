import { useState } from "react";

export default function AuthDemo() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      setToken(data.token);
      setMsg("Login successful");
    } else {
      setMsg(data.message);
    }
  };

  const accessProtected = async () => {
    const res = await fetch("http://localhost:5000/protected", {
      headers: { authorization: token }
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>JWT Login Demo</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={login}>Login</button>
      <br /><br />

      <button onClick={accessProtected}>Access Protected</button>

      <p>{msg}</p>
    </div>
  );
}
