import React, { useState } from "react";
import "./loginscreen.css";
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

  const goToFeaturesScreen = (e) => {
    e.preventDefault();
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
    validateForm();
  };

  return (
    <div className="loginScreen d-flex">
      <div className="loginContainer col-6">
        <div className="card">
          <div className="box1">
            <div>
              <h3 className="login">Login Account</h3>
              <p className="caption">Welcome to our App</p>
            </div>
          </div>

          <form>
            <div className="box2">
              <div className="inputContainer">
                <div>
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
                </div>
                {errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </div>

              <div className="inputContainer">
                <div>
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
                </div>
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>
            </div>
            <div className="box3">
              <div className="lineContainer">
                <div className="checkboxContainer">
                  <input className="checkbox" type="checkbox" />
                  <label>Remember me</label>
                </div>
                <div
                  className="forgotPassword"
                  onClick={goToForgotPasswordScreen}
                >
                  Forgot password?
                </div>
              </div>

              <button className="signInBtn" onClick={(e) => goToFeaturesScreen(e)}>
                Login
              </button>
              <button className="signInBtn">Login with Company Email</button>
            </div>
          </form>

          <div>
            <h6 className="regHere" onClick={goToSignupScreen}>
              Don't have an account? <span className="regBtn"> Register</span>
            </h6>
          </div>
        </div>
      </div>
      <div className="titleAnim col-6">
        <img src="./chillogo.png" alt="logo" />
      </div>
    </div>
  );
};

export default LoginScreen;
