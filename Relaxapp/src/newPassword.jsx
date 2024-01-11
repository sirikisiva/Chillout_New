import React, { useState } from "react";
import { data } from "./data.js";
import { useNavigate } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import "./newPassword.css";
const NewPassword = () => {
  const regex = data;
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState({
    password: "",
    errorActive: false,
    errorMessage: "",
    valid: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    password: "",
    errorActive: false,
    errorMessage: "",
    valid: false,
  });

  // const location = useLocation();
  // valueKey is storing param from previousScreen-->forgotPasswordscreen
  // const valueKey = location.state?.value || "";

  const newPasswordOnHandle = (e) => {
    const inputValue = e.target.value;
    const val = regex[1].password.test(e.target.value);
    setNewPassword({ ...newPassword, password: inputValue, valid: val });
  };
  const confirmPasswordOnHandle = (e) => {
    const inputValue = e.target.value;
    const val = regex[1].password.test(e.target.value);
    setConfirmPassword({
      ...confirmPassword,
      password: inputValue,
      valid: val,
    });
  };
  const newPasswordValidateOnBlur = () => {
    if (
      newPassword.password === "" ||
      newPassword.password === undefined ||
      newPassword.password === null
    ) {
      setNewPassword({
        ...newPassword,
        errorActive: true,
        errorMessage: "Please set new password",
      });
    } else if (newPassword.password.match(regex[1].password)) {
      setNewPassword({
        ...newPassword,
        errorActive: false,
        errorMessage: "validInput",
      });
      // console.log(`${newPassword.errorMessage} ==>>`)
    } else {
      setNewPassword({
        ...newPassword,
        errorActive: true,
        errorMessage: "Please create strong Password",
      });
      // show pop-up that shows Password requirements
    }
  };

  const confirmPasswordValidateOnBlur = () => {
    if (
      confirmPassword.password === "" ||
      confirmPassword.password === undefined ||
      confirmPassword.password === null
    ) {
      setConfirmPassword({
        ...confirmPassword,
        errorActive: true,
        errorMessage: "Please confirm your password",
      });
    } else if (confirmPassword.password.match(regex[1].password)) {
      setConfirmPassword({
        ...confirmPassword,
        errorActive: false,
        errorMessage: "validInput",
      });
      // console.log(`${confirmPassword.errorMessage} ==>>`)
    } else if (newPassword.password !== confirmPassword.password) {
      setConfirmPassword({
        ...confirmPassword,
        errorActive: true,
        errorMessage: "Doesn't match new password",
      });
      // show pop-up that shows Password requirements
    }
  };

  const onClickResetPassword = () => {
    if (
      newPassword.valid &&
      confirmPassword.valid &&
      newPassword.password === confirmPassword.password
    ) {
      navigate("/LoginScreen");
    } else {
      setNewPassword({
        ...newPassword,
        errorActive: true,
        errorMessage: "Please enter valid passwords to reset",
      });
      setConfirmPassword({
        ...confirmPassword,
        errorActive: true,
        errorMessage: "Please enter valid passwords to reset",
      });
    }
  };

  // const handleAnimationEnd = () => {
  //   const chilloutText = document.querySelector(".chill-out-text");
  //   chilloutText.style.display = "block";
  // };
  return (
    <div className="newPasswordScreen">
      <div className="npCard">
        <div className="titleBox">
          <h3>Change Password</h3>
          <p>create strong password & do not set your previous password</p>
        </div>
        <div className="inputsBox">
          <div className="npInputContainer">
            <label className="inputLabel">new password</label>
            <input
              type="text"
              name="newPassword"
              value={newPassword.password}
              placeholder="enter new password"
              className="npInputStyle"
              style={{borderColor:(!newPassword.errorActive && !newPassword.verify ) ? "purple" : "red"}}
              onChange={newPasswordOnHandle}
              onBlur={newPasswordValidateOnBlur}
            />
            {newPassword.errorActive === false &&
            newPassword.errorMessage != null ? (
              <></>
            ) : (
              <div className="error-message">
                <span>{newPassword.errorMessage}</span>
              </div>
            )}
          </div>

          <div className="npInputContainer">
            <label className="inputLabel">confirm password</label>
            <input
              type="text"
              name="confirmPassword"
              value={confirmPassword.password}
              placeholder="confirm password"
              className="npInputStyle"
              style={{borderColor:(!confirmPassword.errorActive && !confirmPassword.verify ) ? "purple" : "red"}}
              disabled={newPassword.valid === true ? false : true}
              onChange={confirmPasswordOnHandle}
              onBlur={confirmPasswordValidateOnBlur}
            />
            {confirmPassword.errorActive === false &&
            confirmPassword.errorMessage != null ? (
              <></>
            ) : (
              <div className="error-message">
                <span>{confirmPassword.errorMessage}</span>
              </div>
            )}
          </div>
        </div>
        <div className="loginBtnBox">
          <button
            className="npBtn"
            style={{
              color:
                newPassword.valid && confirmPassword.valid ? "white" : "darkgray",
            }}
            disabled={newPassword.valid && confirmPassword.valid ? false : true}
            onClick={onClickResetPassword}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
