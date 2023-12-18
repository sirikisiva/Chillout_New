import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./userinfo";
import LoginScreen from "./loginscreen";
import "./signup.css";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);

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
                  <input type="text" name="name" className="inputField"></input>
                </div>
                <div className="field">
                  <label className="labelName">EMAIL </label>
                  <input
                    type="email"
                    name="name"
                    className="inputField"
                  ></input>
                </div>
                <div className="field">
                  <label className="labelName">PASSWORD </label>
                  <input
                    type="password"
                    name="name"
                    className="inputField"
                  ></input>
                </div>
      
                <a className="clickHere" onClick={openPopup}>
                  Click here! to share a bit about yourself and enhance your
                  overall app journey.
                </a>

                <div className="submit">Sign Up</div>
              </form>
            </div>
            <div className="blueBackground"></div>
          </div>
        </div>
        <div className="col-5 animated-col">
        
          {/* <div className="cartoon-container" onAnimationEnd={handleAnimationEnd}>
          <div className="img-div">
          
          </div>
          <div className="chill-out-text">CHILL OUT</div>
        </div> */}
        </div>
      </div>

      <div>{isPopupOpen && <UserInfo onClose={closePopup} />}</div>
    </div>
  );
};

export default SignupScreen;
