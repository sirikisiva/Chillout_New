import React, { useState } from "react";
import "./forgotpassword.css";
import { data } from "./data";

const ForgotPasswordScreen = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const regex = data;
  const [emailError, setEmailError] = useState({
    errorActive: false,
    errorMessage: "", 
  });
  const [otpError, setOtpError] = useState({
    errorActive: false,
    errorMessage: "",  
  });
  const [otpValue, setOtpValue] = useState({
    get: false,
    verify: false,
  });

  const handleOnEmailInputChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleOnOtpInputChange = (e) => {
    setOtp(e.target.value);
    console.log(otp);
  };
  const handleEmailInputOnBlur = () => {
    if (email === "" || email === undefined || email === null) {
      setEmailError({
        ...emailError,
        errorActive: true,
        errorMessage: "Enter registered email ID",
      });
    } else if (email.match(regex[0].email)) {
     
      setEmailError({
        ...emailError,
        errorActive: false,
        errorMessage: "correctEmail",
      });
      console.log(`It's a Match ${emailError.errorMessage} ${emailError.errorActive}`);
    } else {
     
      setEmailError({
        ...emailError,
        errorActive: true,
        errorMessage: "Please enter valid email ID",
      });
      console.log(`It's not a Matched ${emailError.errorMessage}  ${emailError.errorActive}`);
    }
  };
  const handleOtpInputOnBlur = () => {
    if (otp === "" || otp === undefined || otp === null) {
      setOtpError({
        ...otpError,
        errorActive: true,
        errorMessage: "Enter OTP sent to your email",
      });
      console.log(`Enter valid OTP ==>  ${otpError.errorMessage} ${regex[3].otp}`);
      
    } 
    else if (otp.match(regex[3].otp)) {
      
      setOtpError({
        ...otpError,
        errorActive: false,
        errorMessage: "correctOTP",
      });
      console.log(`It's a Match ==> ${otpError.errorMessage} ${regex[3].otp}`);
    } else {
     
      setOtpError({
        ...otpError,
        errorActive: true,
        errorMessage: "OTP should be 5 digits",
      });
      console.log(`It's not a Matched ==>  ${otpError.errorMessage} ${otpError.errorActive}`);
    }
  };



  const onClickGetOtp = () => {
    setOtpValue({ ...otpValue, get: true });
  };
const onClickVerifyOtp = () => {
  console.log("OTP verified")
}
  // const validatePassword = () => {
  //   if (!password) {
  //     setPasswordError("Please enter a password");
  //   } else if (password.length < 6) {
  //     setPasswordError("Password must be at least 6 characters");
  //   } else {
  //     setPasswordError("");
  //   }
  // };

  // const validateConfirmPassword = () => {
  //   if (!confirmPassword) {
  //     setConfirmPasswordError("Please confirm your password");
  //   } else if (confirmPassword !=== password) {
  //     setConfirmPasswordError("Passwords do not match");
  //   } else {
  //     setConfirmPasswordError("");
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   validatePassword();
  //   validateConfirmPassword();
  // };

  // const handleAnimationEnd = () => {
  //   const chilloutText = document.querySelector(".chill-out-text");
  //   chilloutText.style.display = "block";
  // };

  return (
    <div className="forgotPasswordScreen">
      {emailError.errorMessage === "correctEmail" && otpValue.get === true ? (
        <div className="fpCard">
          <div className="titleBox">
            <h1>Forgot Password</h1>
            <p>If registered you'll receive OTP</p>
          </div>
          <div className="inputsBox">
            <div className="emailInputContainer">
              <label className="inputLabel">OTP</label>
              <input
                type="number"
                name="otp"
                placeholder="enter OTP"
                className="fpInputStyle"
                value={otp}
                onChange={handleOnOtpInputChange}
                // onFocus={handleFocus}
                onBlur={handleOtpInputOnBlur}
              />
              {otpError.errorActive === false &&
              otpError.errorMessage === "correctOTP" ? (
                <></>
              ) : (
                <div className="error-message">{otpError.errorMessage}</div>
              )}
            </div>
          </div>
          <div className="loginBtnBox">
            <button
              className="fpSignInBtn"
              hidden={otpError.errorMessage === "correctOTP" ? false : true}
              onClick={onClickVerifyOtp}
            >
              VERIFY
            </button>
          </div>
        </div>
      ) : (
        <div className="fpCard">
          <div className="titleBox">
            <h1>Forgot Password</h1>
            <p>OTP will be sent to your registered email</p>
          </div>
          <div className="inputsBox">
            <div className="emailInputContainer">
              <label className="inputLabel">User Email ID</label>
              <input
                type="email"
                name="email"
                placeholder="enter registered email"
                className="fpInputStyle"
                value={email}
                onChange={handleOnEmailInputChange}
                // onFocus={handleFocus}
                onBlur={handleEmailInputOnBlur}
              />
              {emailError.errorActive === false &&
              emailError.errorMessage === "correctEmail" ? (
                <></>
              ) : (
                <div className="error-message">{emailError.errorMessage}</div>
              )}
            </div>
          </div>
          <div className="loginBtnBox">
            <button
              className="fpSignInBtn"
              hidden={emailError.errorMessage === "correctEmail" ? false : true}
              onClick={onClickGetOtp}
            >
              GET OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordScreen;


