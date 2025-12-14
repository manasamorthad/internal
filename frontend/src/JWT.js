import React, { useState } from "react";

function JWT() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = () => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setMessage("Login Successful");
        } else {
          setMessage("Login Failed");
        }
      });
  };

  const logout = () => {
  localStorage.removeItem("token");
  setMessage("Logged out successfully");
};


  const getDashboard = () => {
    fetch("http://localhost:5000/dashboard", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => setMessage(data.message));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>JWT Authentication</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={login}>Login</button>
      <button onClick={getDashboard}>Access Dashboard</button>
      <button onClick={logout}>Logout</button>

      <p>{message}</p>
    </div>
  );
}

export default JWT;