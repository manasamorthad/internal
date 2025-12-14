import { useState } from "react";

export default function HelloAPI() {
  const [msg, setMsg] = useState("");

  const callAPI = async () => {
    const res = await fetch("http://localhost:5000/hello");
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div style={{ textAlign:"center",marginTop:"50px" }}>
      <button onClick={callAPI}>Call Server</button>
      <p>{msg}</p>
    </div>
  );
}
