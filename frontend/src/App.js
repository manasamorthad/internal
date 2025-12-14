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
import PasswordStrength from "./PasswordStrength"
import Calculator from './Calculator'
import StudentTeacher from "./StudentTeacher";
import Counter from './Counter'
// import ProductApp from "./ProductApp"
import AuthDemo from './AuthDemo';
import HelloAPI from "./HelloAPI";
import JWT from './JWT'
function App() {
  return (
    <div>
      {/* <Page /> */}
      {/* <Counter/> */}
      {/* <StudentTeacher /> */}
      {/* <Calculator/> */}
      {/* <LoginForm/> */}
      {/* <RegisterPage/> */}
      {/* <PasswordCheck/> */}
      {/* return <ServerStatus/> */}
      {/* <Greet/> */}
      {/* <Calc4/> */}
      {/*<Provider store={store}>
      
        <Students />
    </Provider>*/}
    {/* <ProductApp/> */}
    {/* <PasswordStrength/> */}
    <AuthDemo/>
    {/* <HelloAPI/> */}
    {/* <JWT/> */}
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
