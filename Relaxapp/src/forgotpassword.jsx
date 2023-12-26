import React, { useState } from "react";
import "./forgotpassword.css";

const ForgotPasswordScreen = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Please enter a password");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();
    validateConfirmPassword();
  };


  const handleAnimationEnd = () => {
    const chilloutText = document.querySelector(".chill-out-text");
    chilloutText.style.display = "block";
  };

  return (
    <div className="d-flex">
      <div className="col-7">
        <div className="forgotText">Forgot Password</div>
        <div className="forgotBox">
          <div className="orangeBackground"></div>
          <div className="forgotFormBox">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="labelName">NEW PASSWORD </label>
                <input
                  type="password"
                  name="name"
                  className="inputField"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}    
                ></input>
                   {passwordError && <div className="error">{passwordError}</div>}
              </div>

              <div className="field">
                <label className="labelName">CONFIRM PASSWORD </label>
                <input
                  type="password"
                  name="name"
                  className="inputField"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={validateConfirmPassword}
                ></input>
                 {confirmPasswordError && (
              <div className="error">{confirmPasswordError}</div>
            )}
              </div>

              <div className="submit">Reset Password</div>
            </form>
          </div>
          <div className="blueBackground"></div>
        </div>
      </div>
      <div className="col-5 animated-col">
        <div className="cartoon-container" onAnimationEnd={handleAnimationEnd}>
          <div className="img-div">
            <img
              className="cartoon-image"
              src="sadcartoon-removebg-preview.png"
              alt="Cartoon"
            />
          </div>
          <div className="chill-out-text">CHILL OUT</div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
