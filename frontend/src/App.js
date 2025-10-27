import Page from "./Page";
import LoginForm from "./LoginForm";
import RegisterPage from "./RegisterPage"
import PasswordCheck from "./PasswordCheck";
import ServerStatus from "./ServerStatus";
import Greet from "./Greet";
import Calc4 from "./Calc4"
import { Provider } from "react-redux";
import { store } from "./store";
import Students from "./Students";
import ProductApp from "./ProductApp"
function App() {
  return (
    <div>
      {/* <Page /> */}
      {/* <LoginForm/> */}
      {/* <RegisterPage/> */}
      {/* <PasswordCheck/> */}
      {/* return <ServerStatus/> */}
      {/* <Greet/> */}
      {/* <Calc4/> */}
      {/* <Provider store={store}>
      <Students />
    </Provider> */}
    <ProductApp/>
    </div>
  );
}
export default App;

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
