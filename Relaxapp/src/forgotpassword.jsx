import React from "react";
import "./forgotpassword.css";

const ForgotPasswordScreen = () => {
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
            <form>
              <div className="field">
                <label className="labelName">NEW PASSWORD </label>
                <input
                  type="password"
                  name="name"
                  className="inputField"
                ></input>
              </div>

              <div className="field">
                <label className="labelName">CONFIRM PASSWORD </label>
                <input
                  type="password"
                  name="name"
                  className="inputField"
                ></input>
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
