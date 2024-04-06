import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import LogoScreen from "./logoscreen";
import SignupScreen from "./Signup";
import LoginScreen from "./loginscreen";
import ForgotPasswordScreen from "./forgotpassword";
import NewPassword from "./newPassword";
import UserInfo from "./userinfo";
import Features from "./features";
import Music from "./music";
import Meditation from "./meditation";
import Motivation from "./motivation";
import Friend from "./friend";
import Reels from "./reels";
import Books from "./books";
import ExtraFeatures from "./extraFeaturesList";
import Diary from "./diary";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/" element = { <LogoScreen></LogoScreen> }></Route>
       <Route path="/SignupScreen" element = { <SignupScreen></SignupScreen> }></Route>
       <Route path="/LoginScreen" element = { <LoginScreen></LoginScreen>}></Route>
       <Route path="/ForgotPasswordScreen" element = { <ForgotPasswordScreen></ForgotPasswordScreen>}></Route>
       <Route path="/newPassword" element={<NewPassword></NewPassword>}></Route>
       <Route path="/UserInfo" element = { <UserInfo></UserInfo> }></Route>
       <Route path="/Features" element = {<Features></Features> }></Route>
       <Route path="/Music" element = {<Music></Music> }></Route>
       <Route path="/Meditation" element = {<Meditation></Meditation> }></Route>
       <Route path="/Motivation" element = {<Motivation></Motivation> }></Route>
       <Route path="/Friend" element = {<Friend></Friend> }></Route>
       <Route path="/Reels" element = {<Reels></Reels> }></Route>
       <Route path="/Books" element = {<Books></Books> }></Route>
       <Route path="/Diary" element = {<Diary></Diary> }></Route>
       <Route path="/ExtraFeatures" element = {<ExtraFeatures></ExtraFeatures> }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
