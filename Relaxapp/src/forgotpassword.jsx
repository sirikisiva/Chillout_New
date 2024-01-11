import React, { useState } from "react";
import "./forgotpassword.css";
import { data } from "./data";
import { useNavigate } from "react-router-dom";

const ForgotPasswordScreen = () => {
  const regex = data;
  const navigate = useNavigate();
  const [email, setEmail] = useState({
    val: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
    valid: false,
  });
  const [otp, setOtp] = useState({
    val: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
    valid: false,
  });

  const handleOnEmailInputChange = (e) => {
    const val = regex[0].email.test(e.target.value);
    setEmail({ ...email, val: e.target.value, valid: val });
    
  };

  const handleOnOtpInputChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    const val = regex[3].otp.test(e.target.value);
    setOtp({ ...otp, val: input, verify: true, valid: val });
    console.log(otp.val, "-----", otp.valid);
    // In general, we should provide OTP sent to email,
    // for the time being, we are using .length
  };

  const handleEmailInputOnBlur = () => {
    if (email.val === "" || email.val === undefined || email.val === null) {
      setEmail({
        ...email,
        errorActive: true,
        errorMessage: "Enter registered email ID",
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
        errorMessage: "Please enter valid email ID",
      });
      console.log(
        `It's not a Matched ${email.errorMessage}  ${email.errorActive}`
      );
    }
  };
  const handleOtpInputOnBlur = () => {
    if (otp.val === "" || otp.val === undefined || otp.val === null) {
      setOtp({
        ...otp,
        errorActive: true,
        errorMessage: "Enter OTP sent to your email",
      });
      console.log(`Enter valid OTP ==>  ${otp.errorMessage}`);
    } else if (otp.val.match(regex[3].otp)) {
      setOtp({
        ...otp,
        errorActive: false,
        errorMessage: "correctOTP",
        verify: true,
      });
      console.log(`It's a Match ==> ${otp.errorMessage} ${otp.errorActive}`);
    } else {
      setOtp({
        ...otp,
        errorActive: true,
        errorMessage: "OTP should be 4 digits",
      });
      console.log(
        `It's not a Matched ==>  ${otp.errorMessage} ${otp.errorActive}`
      );
    }
  };
  // post email to get OTP
  const onClickGetOtp = () => {
    setEmail({ ...email, verify: true });
    console.log(email.verify);
  };

  // passing params through navigation
  const onClickVerifyOtp = () => {
    if (otp.verify === true) {
      navigate("/newPassword", {
        state: { value: otp.verify, webToken: "" },
      });
      console.log("OTP verified ==>> navigating to new password screen ");
    }
  };

  return (
    <div className="forgotPasswordScreen">
      {email.errorMessage === "validEmail" && email.verify === true ? (
        <div className="fpCard">
          <div className="titleBox">
            <h3>Forgot Password</h3>
            <p>If registered you'll receive OTP</p>
          </div>
          <div className="inputsBox">
            <div className="emailInputContainer">
              <label className="inputLabel">OTP</label>
              <input
                type="text"
                name="otp"
                value={otp.val}
                placeholder="enter OTP"
                className="fpInputStyle"
                style={{borderColor:(!otp.errorActive ) ? "purple" : "red"}}
                onChange={handleOnOtpInputChange}
                onBlur={handleOtpInputOnBlur}
                maxLength={4}
              />
              {otp.errorActive === false &&
              otp.errorMessage === "correctOTP" ? (
                <></>
              ) : (
                <div className="error-message">{otp.errorMessage}</div>
              )}
            </div>
          </div>
          <div className="loginBtnBox">
            <button
              className="fpSignInBtn"
              style={{ color: otp.valid === true ? "white" : "darkgray" }}
              disabled={otp.valid === true ? false : true}
              onClick={onClickVerifyOtp}
            >
              VERIFY
            </button>
          </div>
        </div>
      ) : (
        <div className="fpCard">
          <div className="titleBox">
            <h3>Forgot Password</h3>
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
                style={{borderColor:(!email.errorActive && !email.verify ) ? "purple" : "red"}}
                value={email.val}
                onChange={handleOnEmailInputChange}
                onBlur={handleEmailInputOnBlur}
              />
              {email.errorActive === false &&
              email.errorMessage === "validEmail" ? (
                <></>
              ) : (
                <div className="error-message">{email.errorMessage}</div>
              )}
            </div>
          </div>
          <div className="loginBtnBox">
            <button
              className="fpSignInBtn"
              style={{
                color: email.valid === true ? "white" : "darkgray",
              }}
              onClick={onClickGetOtp}
              disabled={email.valid === true ? false : true}
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
