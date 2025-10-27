import React from "react";
import ReactDOM from "react-dom";

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)" }}>
      <div style={{ background: "white", padding: 20, margin: "100px auto", width: 200, textAlign: "center" }}>
        <p>This is a modal!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;

// export default App;
// import React, { useState } from "react";
// import Modal from "./Modal";

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(true)}>Open Modal</button>
//       {show && <Modal onClose={() => setShow(false)} />}
//     </div>
//   );
// }

// export default App;