import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./userinfo";
import LoginScreen from "./loginscreen";
import "./signup.css";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const goToLoginScreen = () => {
    navigate("/LoginScreen");
  };

  const goToUserInfoScreen = () => {
    navigate("/UserInfo");
  };

  const handleAnimationEnd = () => {
    const chilloutText = document.querySelector(".chill-out-text");
    chilloutText.style.display = "block";
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const goToFeaturesScreen = () => {
    navigate("/Features");
  };

  const validateName = () => {
    if (!name.trim()) {
      setNameError("Please enter your name");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Please enter your email");
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("Please enter a password");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validatePassword();
    if (!nameError && !emailError && !passwordError) {
      goToFeaturesScreen();
    }
  };

  return (
    <div>
      <div className="d-flex">
        <div className="col-7">
          <div>
            <div className="newAccount signUp">Create new Account</div>
            <div className="registered signUp" onClick={goToLoginScreen}>
              Already Registered? Log in here.
            </div>
          </div>
          <div className="signupBox">
            <div className="orangeBackground"></div>
            <div className="signupFormBox">
              <form onSubmit={handleSubmit}>
                <div className="fields">
                  <label className="labelName">NAME </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={validateName}
                    className="inputField"
                  ></input>
                  {nameError && <div className="error">{nameError}</div>}
                </div>
                <div className="field">
                  <label className="labelName">EMAIL </label>
                  <input
                    type="email"
                    name="name"
                    className="inputField"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                  ></input>
                  {emailError && <div className="error">{emailError}</div>}
                </div>
                <div className="field">
                  <label className="labelName">PASSWORD </label>
                  <input
                    type="password"
                    name="name"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={validatePassword}
                    className="inputField"
                  ></input>
                  {passwordError && (
                    <div className="error">{passwordError}</div>
                  )}
                </div>

                <a className="clickHere" onClick={openPopup}>
                  Click here! to share a bit about yourself and enhance your
                  overall app journey.
                </a>

                <div className="submit">
                  Sign Up
                </div>
              </form>
            </div>
            <div className="blueBackground"></div>
          </div>
        </div>
        <div className="col-5 animated-col"></div>
      </div>

      <div>{isPopupOpen && <UserInfo onClose={closePopup} />}</div>
    </div>
  );
};

export default SignupScreen;
