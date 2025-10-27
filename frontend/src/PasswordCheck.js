import React, { useState } from "react";

function PasswordCheck() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") setPassword(value);
    else setConfirm(value);

    if (name === "password") {
      const isStrong =
            value.length >= 8 &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value) &&
            /[@$!%*?&]/.test(value);

      setMessage(isStrong ? "✅ Strong password" : "⚠️ Weak password");

    }

    if (name === "confirm") {
      setMessage(value !== password ? "❌ Passwords do not match" : "✅ Passwords match");
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", fontFamily: "Arial" }}>
      <h3>Password Check</h3>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <input
        type="password" 
        name="confirm"
        placeholder="Confirm password"
        value={confirm}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <p>{message}</p>
    </div>
  );
}

export default PasswordCheck;
