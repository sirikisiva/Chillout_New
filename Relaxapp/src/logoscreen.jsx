import React from "react";
import { useNavigate } from "react-router-dom"; 
import SignupScreen from "./Signup";
import "./logo.css";

const LogoScreen = () => {

  const navigate = useNavigate();

  const goToLoginScreen = ()=>{
    navigate('/LoginScreen')
  }


  return (
    <div className="container-fluid bg">
      <div className="d-flex justify-content-center pdng">
        <img src="new-logo.png"></img>
      </div>
      <div className="d-flex justify-content-center title-name">CHILL OUT</div>
      <div className="d-flex justify-content-center tag-name">
        from negative emotions
      </div>
      <div className="signIn" onClick={goToLoginScreen}> 
          Get Started
       </div> 
    </div>
  );
};

export default LogoScreen;
