

import React, { useState } from "react";
import "./loginscreen.css";
// import { TextInput } from "./components/TextInput";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [isFocused, setIsFocused] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const goToSignupScreen = () => {
    navigate("/SignupScreen");
  };

  const goToForgotPasswordScreen = () => {
    navigate("/ForgotPasswordScreen");
  };

  const goToFeaturesScreen = () => {
    if (validateForm()) {
      navigate("/Features");
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = "Please enter your name";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!formData.password) {
      newErrors.password = "Please enter your password";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginScreen">
      {/* <div>
          <h6>Nice to see you again</h6>
          <h1>WELCOME BACK!</h1>
        </div> */}
      <div className="animCard">
        <span className="logoName">ChillOUT</span>
        <span className="logoCaption">chill vibe with chilling content</span>
        {/* <img src="./logocircle.png" alt="logo" className="App-logo" /> */}
      </div>

      <div className="card">
        
        <div className="loginCardTitle">
          <h1>Login Account</h1>
          <p>Welcome to our App</p>
        </div>
        <div>
          <div className="inputContainer">
            <label className="inputLabel">Username or Email</label>
            <input
              type="text"
              name="name"
              placeholder="Username or Email"
              className="inputStyle"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="inputContainer">
            <label className="inputLabel">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="inputStyle"
              value={formData.password}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
        </div>
        <div>
          <div className="lineContainer">
            <div className="checkboxContainer">
              <input className="checkbox" type="checkbox" />
              <label>Remember me</label>
            </div>
            <div className="forgotPassword" onClick={goToForgotPasswordScreen}>
              Forgot password?
            </div>
          </div>
          <div className="loginBtnsContainer">
            <button className="signInBtn" onClick={goToFeaturesScreen}>
              Login
            </button>
            <button className="signInBtn">Login with Company Email</button>
          </div>
        </div>
        <div>
          <h6>
            Don't have an account ?{" "}
            <b>
              <span className="regBtn" onClick={goToSignupScreen}>
                Register
              </span>
            </b>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
