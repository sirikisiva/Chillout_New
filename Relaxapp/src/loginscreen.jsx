import React, { useState } from "react";
import "./loginscreen.css";
import {data} from './data'
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   password: "",
  // });
  const regex = data
  const [email,setEmail]=useState({
    value:"",
    errorActive:true,
    errorMessage:"",
    verify:""
  })
  const [password,setPassword]=useState({
    value:"",
    errorActive:true,
    errorMessage:"",
    verify:""
  })
  const [isFocused, setIsFocused] = useState(false);
  // const [errors, setErrors] = useState({
  //   name: "",
  //   password: "",
  // });

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

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };
  // const validateForm = () => {
    // let isValid = true;
    // const newErrors = { ...errors };

    // if (email.value) {
    //   newErrors.name = "Please enter your name";
    //   isValid = false;
    // } else {
    //   newErrors.name = "";
    // }

    // if (!formData.password) {
    //   newErrors.password = "Please enter your password";
    //   isValid = false;
    // } else {
    //   newErrors.password = "";
    // }

    // setErrors(newErrors);
    // return isValid;
  // };
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
    if (email.val === "" || email.val === undefined || email.val === null) {
      setEmail({
        ...email,
        errorActive: true,
        errorMessage: "Please enter registered email Id",
      });
    } else if (email.val.match(regex[0].email)) {
      setEmail({
        ...email,
        errorActive: false,
        errorMessage: "validEmail",
      });
      console.log(`It's a Match ${email.errorMessage} `);
    } else {
      setEmail({
        ...email,
        errorActive: true,
        errorMessage: "incorrect email ID",
      });
      console.log(
        `It's not a Matched ${email.errorMessage}  ${email.errorActive}`
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

  // const handleEmailInputChange = (e) => {
  //   setEmail({ ...email, value: e.target.value });
  //   validateForm();
  // };
  // const handlePasswordInputChange = (e) => {
  //   setPassword({ ...password, value: e.target.value });
  //   validateForm();
  // };

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

              <button className="signInBtn" onClick={ goToFeaturesScreen}>
                Login
              </button>
              <button className="signInBtn">Login with Company Email</button>
            </div>
          </form>

          <div>
            <h6 className="regHere" onClick={goToSignupScreen}>
              Don't have an account? <span className="regBtn"> Register/SignUp</span>
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
