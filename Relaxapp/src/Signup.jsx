import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./userinfo";
import "./signup.css";

const SignupScreen = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = "Please enter your name";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!formData.email) {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else {
      newErrors.email = "";
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

  const goToFeaturesScreen = () => {
    if (validateForm()) {
      navigate("/Features");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goToLoginScreen = () => {
    navigate("/LoginScreen");
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
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
              <form>
                <div className="fields">
                  <label className="labelName">NAME </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="inputField"
                  ></input>
                  {errors.name && (
                    <div className="error-message">{errors.name}</div>
                  )}
                </div>
                <div className="field">
                  <label className="labelName">EMAIL </label>
                  <input
                    type="email"
                    name="email"
                    className="inputField"
                    value={formData.email}
                    onChange={handleInputChange}
                  ></input>
                  {errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>
                <div className="field">
                  <label className="labelName">PASSWORD </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="inputField"
                  ></input>
                  {errors.password && (
                    <div className="error-message">{errors.password}</div>
                  )}
                </div>

                <a className="clickHere" onClick={openPopup}>
                  Click here! to share a bit about yourself and enhance your
                  overall app journey.
                </a>

                <div className="submit" onClick={goToFeaturesScreen}>
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
