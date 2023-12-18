import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter , Route, Routes, useHistory } from 'react-router-dom';
import LogoScreen from "./logoscreen";
import SignupScreen from "./Signup";
import LoginScreen from "./loginscreen";
import ForgotPasswordScreen from "./forgotpassword";
import UserInfo from "./userinfo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/" element = { <LogoScreen></LogoScreen> }></Route>
       <Route path="/SignupScreen" element = { <SignupScreen></SignupScreen> }></Route>
       <Route path="/LoginScreen" element = { <LoginScreen></LoginScreen>}></Route>
       <Route path="/ForgotPasswordScreen" element = { <ForgotPasswordScreen></ForgotPasswordScreen>}></Route>
       <Route path="/UserInfo" element = { <UserInfo></UserInfo> }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
