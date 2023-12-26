import React, { useState } from "react";
import "./loginscreen.css";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

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
    <div className="d-flex">
      <div className="col-7">
        <div className="loginText">Login</div>
        <div className="loginBox">
          <div className="orangeBackground"></div>
          <div className="loginFormBox">
            <form>
              <div className="fields">
                <label className="labelName">NAME </label>
                <input
                  type="text"
                  name="name"
                  className="inputField"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </div>

              <div className="field">
                <label className="labelName">PASSWORD </label>
                <input
                  type="password"
                  name="password"
                  className="inputField"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>

              <div className="submit" onClick={goToFeaturesScreen}>
                Log In
              </div>
            </form>
            <div
              className="forgotPassword"
              onClick={goToForgotPasswordScreen}
            >
              Forgot password!
            </div>
            <div className="signUpAccount" onClick={goToSignupScreen}>
              Don't have an account? Sign Up here!
            </div>
          </div>
          <div className="blueBackground"></div>
        </div>
      </div>
      <div className="col-5"></div>
    </div>
  );
};

export default LoginScreen;
