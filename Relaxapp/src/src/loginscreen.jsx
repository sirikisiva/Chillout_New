import React, { useState } from "react";
import "./loginscreen.css";
import { data } from "./data";
import { useNavigate } from "react-router-dom";
const LoginScreen = () => {
  const regex = data;
  const [email, setEmail] = useState({
    value: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
  });
  const [password, setPassword] = useState({
    value: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
  });
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();

  const goToSignupScreen = () => {
    navigate("/SignupScreen");
  };

  const goToForgotPasswordScreen = () => {
    navigate("/ForgotPasswordScreen");
  };

  const goToFeaturesScreen = () => {
    navigate("/Features");
  };



  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleEmailInputChange = (e) => {
    const inputValue = e.target.value;
    const val = regex[0].email.test(e.target.value);
    setEmail({ ...email, value: inputValue, verify: val });
  };
  const handlePasswordInputChange = (e) => {
    const inputValue = e.target.value;
    const val = regex[1].password.test(e.target.value);
    setPassword({ ...password, value: inputValue, verify: val });
  };

  const handleEmailInputOnBlur = () => {
    setIsFocused(false);
    if (
      email.value === "" ||
      email.value === undefined ||
      email.value === null
    ) {
      setEmail({
        ...email,
        errorActive: true,
        errorMessage: "Please enter registered email Id",
      });
      console.log(`${email.errorMessage} ===> error ==> ${email.errorActive}`);
    } else if (email.value.match(regex[0].email)) {
      setEmail({
        ...email,
        errorActive: false,
        errorMessage: "validEmail",
      });
      console.log(
        `It's a Match ${email.errorMessage} ===> error ==>${email.errorActive}`
      );
    } else {
      setEmail({
        ...email,
        errorActive: true,
        errorMessage: "incorrect email Id",
      });
      console.log(
        `It's not a Matched  ${email.errorMessage} ===> error ==>${email.errorActive}`
      );
    }
  };

  const handlePasswordInputOnBlur = () => {
    setIsFocused(false);
    if (
      password.value === "" ||
      password.value === undefined ||
      password.value === null
    ) {
      setPassword({
        ...password,
        errorActive: true,
        errorMessage: "please enter the password",
      });
    } else if (password.value.match(regex[1].password)) {
      setPassword({
        ...password,
        errorActive: false,
        errorMessage: "validInput",
      });
      // console.log(`${newPassword.errorMessage} ==>>`)
    } else {
      setPassword({
        ...password,
        errorActive: true,
        errorMessage: "Incorrect Password",
      });
      // show pop-up that shows Password requirements
    }
  };

  return (
    <div className="loginScreen d-flex">
      <div className="loginContainer col-6">
        <div className="card">
          <div className="lgTitleBox">
            <div>
              <h3 className="login">Login Account</h3>
              <p className="caption">Welcome to our App</p>
            </div>
          </div>

          <form>
            <div className="lgInputBox">
              <div className="inputContainer">
                <div>
                  <label className="inputLabel">Email</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="enter email Id"
                    className="inputStyle"
                    style={{borderColor:(!email.errorActive && !email.verify ) ? "purple" : "red"}}
                    value={email.value}
                    onChange={handleEmailInputChange}
                    onFocus={handleFocus}
                    onBlur={handleEmailInputOnBlur}
                  />
                </div>
                {email.errorActive && (
                  <div className="error-message">{email.errorMessage}</div>
                )}
              </div>

              <div className="inputContainer">
                <div>
                  <label className="inputLabel">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="enter password"
                    className="inputStyle"
                    style={{borderColor:(!password.errorActive && !password.verify ) ? "purple" : "red"}}
                    value={password.value}
                    onChange={handlePasswordInputChange}
                    onFocus={handleFocus}
                    onBlur={handlePasswordInputOnBlur}
                  />
                </div>
                {password.errorActive && (
                  <div className="error-message">{password.errorMessage}</div>
                )}
              </div>
            </div>
            <div className="lgBtnBox">
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

              <button className="signInBtn" onClick={goToFeaturesScreen}>
                Login
              </button>
              <div className="logButons">
                <button className="logBtn1"></button>
                <button className="logBtn2"></button>
                <button className="logBtn3"></button>
              </div>
            </div>
          </form>

          <div>
            <h6 className="regHere" >
              Don't have an account?{" "}
              <span className="regBtn" onClick={goToSignupScreen}> Register/SignUp</span>
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


