import React from "react";
import "./loginscreen.css";
import { useNavigate } from "react-router-dom"; 


const LoginScreen = () => {

  const handleAnimationEnd = () => {
    const chilloutText = document.querySelector(".chill-out-text");
    chilloutText.style.display = "block";
  };

  const navigate = useNavigate();
  const goToSignupScreen = () =>{
    navigate('/SignupScreen')
  }

  const goToForgotPasswordScreen = () =>{
    navigate('/ForgotPasswordScreen')
  }

  const goToFeaturesScreen = () =>{
    navigate('/Features')
  }

  return (
  
    <div className="d-flex">
    <div className="col-7">
      <div className="loginText">Login</div>
      <div className="loginBox">
        <div className="orangeBackground"></div>
        <div className="loginFormBox">
          <form>
            <div className="fields">
              <label className="labelName">NAME </label>
              <input type="text" name="name" className="inputField"></input>
            </div>

            <div className="field">
              <label className="labelName">PASSWORD </label>
              <input
                type="password"
                name="name"
                className="inputField"
              ></input>
            </div>

            <div className="submit" onClick={goToFeaturesScreen}>Log In</div>
          </form>
          <div className="forgotPassword" onClick={goToForgotPasswordScreen}>Forgot password!</div>
          <div className="signUpAccount" onClick={goToSignupScreen}>
                Don't have an account? Sign Up here!
              </div>
        </div>
        <div className="blueBackground"></div>
      </div>
    </div>
    <div className="col-5">
     
        {/* <img src="./loginVideo.gif" className="cartoon-image"></img> */}
      
    </div>
  </div>

  );
};

export default LoginScreen;
