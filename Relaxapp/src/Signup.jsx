// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import UserInfo from "./userinfo";
// import {data} from './data'
// import "./signup.css";

// const SignupScreen = () => {
//   const regex = data
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const navigate = useNavigate();
//   const [username,setUsername]=useState({
//     value:"",
//     errorActive:false,
//     errorMessage:"",
//     verify:false
//   })
//   const [email,setEmail]=useState({
//     value:"",
//     errorActive:false,
//     errorMessage:"",
//     verify:false
//   })
//   const [password,setPassword]=useState({
//     value:"",
//     errorActive:false,
//     errorMessage:"",
//     verify:false
//   })
//   const [confirmPassword,setConfirmPassword]=useState({
//     value:"",
//     errorActive:false,
//     errorMessage:"",
//     verify:false
//   })

//   const handleUsernameInputChange = (e) => {
//     const inputValue = e.target.value;
//     const val = regex[4].username.test(e.target.value);
//     setUsername({ ...username, value: inputValue, verify: val });
//   };
//   const handleEmailInputChange = (e) => {
//     const inputValue = e.target.value;
//     const val = regex[0].email.test(e.target.value);
//     setEmail({ ...email, value: inputValue, verify: val });
//   };
//   const handlePasswordInputChange = (e) => {
//     const inputValue = e.target.value;
//     const val = regex[0].password.test(e.target.value);
//     setPassword({ ...password, value: inputValue, verify: val });
//   };
//   const handleConfirmPasswordInputChange = (e) => {
//     const inputValue = e.target.value;
//     const val = regex[0].password.test(e.target.value);
//     setConfirmPassword({ ...confirmPassword, value: inputValue, verify: val });
//   };

//   // const validateForm = () => {
//   //   let isValid = true;
//   //   const newErrors = { ...errors };

//   //   if (!formData.name) {
//   //     newErrors.name = "Please enter your name";
//   //     isValid = false;
//   //   } else {
//   //     newErrors.name = "";
//   //   }

//   //   if (!formData.email) {
//   //     newErrors.email = "Please enter your email";
//   //     isValid = false;
//   //   } else {
//   //     newErrors.email = "";
//   //   }

//   //   if (!formData.password) {
//   //     newErrors.password = "Please enter your password";
//   //     isValid = false;
//   //   } else {
//   //     newErrors.password = "";
//   //   }

//   //   setErrors(newErrors);
//   //   return isValid;
//   // };

//   const goToFeaturesScreen = () => {

//       navigate("/Features");
//   };
//   const handleUsernameInputOnBlur = () =>{

//     if (username.value === "" || username.value === undefined || username.value === null) {
//       setUsername({
//         ...username,
//         errorActive: true,
//         errorMessage: "Enter username ",
//       });
//     } else if (username.value.match(regex[4].username)) {
//       setUsername({
//         ...username,
//         errorActive: false,
//         errorMessage: "validusername",
//       });
//       console.log(`It's a Match ${username.errorMessage} `);
//     } else {
//       setUsername({
//         ...username,
//         errorActive: true,
//         errorMessage: "Please enter valid username ",
//       });
//       console.log(
//         `It's not a Matched ${username.errorMessage}  ${username.errorActive}`
//       );
//     }
//   };
//   const handleEmailInputOnBlur = () => {
//     if (email.value === "" || email.value === undefined || email.value === null) {
//       setEmail({
//         ...email,
//         errorActive: true,
//         errorMessage: "Enter registered email ID",
//       });
//     } else if (email.value.match(regex[0].email)) {
//       setEmail({
//         ...email,
//         errorActive: false,
//         errorMessage: "validEmail",
//       });
//       console.log(`It's a Match ${email.errorMessage} `);
//     } else {
//       setEmail({
//         ...email,
//         errorActive: true,
//         errorMessage: "Please enter valid email ID",
//       });
//       console.log(
//         `It's not a Matched ${email.errorMessage}  ${email.errorActive}`
//       );
//     }
//   };

//   const goToLoginScreen = () => {
//     navigate("/LoginScreen");
//   };

//   const openPopup = () => {
//     setPopupOpen(true);
//   };

//   const closePopup = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <div>
//       <div className="signUpScreen">

//         <div className="loginContainer col-6">
//           <div className="card">
//             <div className="titleBox">
//               <div>
//                 <h3 className="login">Join us today!</h3>
//                 <p className="caption">Sign up now to become a member.</p>
//               </div>
//             </div>

//             <form>
//               <div className="inputsBox">
//                 <div className="inputContainer">
//                   <div>
//                     <label className="inputLabel">Username </label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="enter your fullname"
//                       className="inputStyle"
//                       value={username.value}
//                       onChange={handleUsernameInputChange}
//                       onBlur={handleUsernameInputOnBlur}
//                     ></input>
//                   </div>
//                   {username.errorActive && (
//                     <div className="error-message">{username.errorMessage}</div>
//                   )}
//                 </div>

//                 <div className="inputContainer">
//                   <div>
//                     <label className="inputLabel">Email ID</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="enter email Id"
//                       className="inputStyle"
//                       value={email.value}
//                       onChange={handleEmailInputChange}
//                       onBlur={handleEmailInputOnBlur}
//                     ></input>
//                   </div>
//                   {email.errorActive && (
//                     <div className="error-message">{email.errorMessage}</div>
//                   )}
//                 </div>
//                 <div className="inputContainer">
//                   <div>
//                     <label className="inputLabel">Password </label>
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="set password"
//                       value={password.value}
//                       onChange={handlePasswordInputChange}
//                       className="inputStyle"
//                     ></input>
//                   </div>
//                   {password.errorActive && (
//                     <div className="error-message">{password.errorMessage}</div>
//                   )}
//                 </div>
//                 <div className="inputContainer">
//                   <div>
//                     <label className="inputLabel">Confirm Password</label>
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="confirm password"
//                       value={confirmPassword.value}
//                       onChange={handleConfirmPasswordInputChange}
//                       className="inputStyle"
//                     ></input>
//                   </div>
//                   {confirmPassword.errorActive && (
//                     <div className="error-message">{confirmPassword.errorMessage}</div>
//                   )}
//                 </div>
//               </div>
//               <div className="btnBox">
//                 <div className="lineContainerSignup">
//                   <input className="checkboxSignup" type="checkbox" />
//                   <label>
//                     <a className="clickHere" onClick={openPopup}>
//                       Click here! to share a bit about yourself.
//                     </a>
//                   </label>
//                 </div>
//                 <div className="lineContainerSignup">
//                   <input className="checkboxSignup" type="checkbox" />
//                   <label className="clickHere">
//                     <a>I accept the terms & conditions of the app</a>
//                   </label>
//                 </div>

//                 <button
//                   className="signInBtn"
//                   onClick={(e) => goToFeaturesScreen(e)}
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </form>

//             <div className="backToLoginBtn">
//               <h6 className="signupRegHere" onClick={goToLoginScreen}>
//                 Already Registered? Log in here.{" "}
//                 <span className="regBtn"> Login</span>
//               </h6>
//             </div>
//           </div>
//         </div>
//         <div className="titleAnim col-6">
//           <img src="./chillogo.png" alt="logosignup" />
//         </div>
//       </div>
//       <div>{isPopupOpen && <UserInfo onClose={closePopup} />}</div>
//     </div>
//   );
// };

// export default SignupScreen;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./userinfo";
import { data } from "./data";
import "./signup.css";

const SignupScreen = () => {
  const regex = data;
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState({
    value: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
  });
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
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
  });

  const handleUsernameInputChange = (e) => {
    const inputValue = e.target.value;
    const noSpaceValue = inputValue.replace(/\s/g, "");
    const val = regex[4].username.test(noSpaceValue);
    setUsername({ ...username, value: noSpaceValue, verify: val });
  };
  const handleEmailInputChange = (e) => {
    const inputValue = e.target.value;
    const noSpaceValue = inputValue.replace(/\s/g, "");
    const val = regex[0].email.test(noSpaceValue);
    setEmail({ ...email, value: noSpaceValue, verify: val });
  };
  const handlePasswordInputChange = (e) => {
    const inputValue = e.target.value;
    const noSpaceValue = inputValue.replace(/\s/g, "");
    const val = regex[1].password.test(noSpaceValue);
    setPassword({ ...password, value: noSpaceValue, verify: val });
  };
  const handleConfirmPasswordInputChange = (e) => {
    const inputValue = e.target.value;
    const noSpaceValue = inputValue.replace(/\s/g, "");
    const val = regex[1].password.test(noSpaceValue);
    setConfirmPassword({ ...confirmPassword, value: noSpaceValue, verify: val });
  };

  const goToFeaturesScreen = () => {
    navigate("/Features");
  };
  const handleInputOnBlur = (input, setInput, regex, errorMessage) => {
    if (
      input.value === "" ||
      input.value === undefined ||
      input.value === null
    ) {
      setInput({
        ...input,
        errorActive: true,
        errorMessage: errorMessage.empty,
      });
    } else if (input.value.match(regex)) {
      setInput({
        ...input,
        errorActive: false,
        errorMessage: errorMessage.valid,
      });
      console.log(`It's a Match ${input.errorMessage} `);
    } else {
      setInput({
        ...input,
        errorActive: true,
        errorMessage: errorMessage.invalid,
      });
      console.log(
        `It's not a Matched ${input.errorMessage}  ${input.errorActive}`
      );
    }
  };

  const handleUsernameInputOnBlur = () => {
    handleInputOnBlur(username, setUsername, regex[4].username, {
      empty: "Enter username details",
      valid: "Valid username",
      invalid: "Please enter valid username",
    });
  };

  const handleEmailInputOnBlur = () => {
    handleInputOnBlur(email, setEmail, regex[0].email, {
      empty: "Enter email id details",
      valid: "Valid email",
      invalid: "Please enter valid email ID",
    });
  };

  const handlePasswordInputOnBlur = () => {
    handleInputOnBlur(password, setPassword, regex[1].password, {
      empty: "Enter your password",
      valid: "Valid password",
      invalid: "Please enter valid password",
    });
  };
  const handleConfirmPasswordInputOnBlur = () => {
    handleInputOnBlur(confirmPassword, setConfirmPassword, regex[1].password, {
      empty: "Confirm your password",
      valid: "Valid password",
      invalid: "Password should match",
    });
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
      <div className="signUpScreen">
        <div className="loginContainer col-6">
          <div className="signUpCard">
            <div className="titleBox">
              <div>
                <h3 className="login">Join us today!</h3>
                <p className="caption">Sign up now to become a member.</p>
              </div>
            </div>

            <form>
              <div className="inputsBox">
                <div className="inputContainer">
                  <div>
                    <label className="inputLabel">Username </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="enter your fullname"
                      className="inputStyle"
                      value={username.value}
                      onChange={handleUsernameInputChange}
                      onBlur={handleUsernameInputOnBlur}
                    ></input>
                  </div>
                  {username.errorActive && (
                    <div className="error-message">{username.errorMessage}</div>
                  )}
                </div>

                <div className="inputContainer">
                  <div>
                    <label className="inputLabel">Email ID</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter email Id"
                      className="inputStyle"
                      value={email.value}
                      onChange={handleEmailInputChange}
                      onBlur={handleEmailInputOnBlur}
                    ></input>
                  </div>
                  {email.errorActive && (
                    <div className="error-message">{email.errorMessage}</div>
                  )}
                </div>
                <div className="inputContainer">
                  <div>
                    <label className="inputLabel">Password </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="set password"
                      value={password.value}
                      className="inputStyle"
                      onChange={handlePasswordInputChange}
                      onBlur={handlePasswordInputOnBlur}
                    ></input>
                  </div>
                  {password.errorActive && (
                    <div className="error-message">{password.errorMessage}</div>
                  )}
                </div>
                <div className="inputContainer">
                  <div>
                    <label className="inputLabel">Confirm Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="confirm password"
                      value={confirmPassword.value}
                      className="inputStyle"
                      onChange={handleConfirmPasswordInputChange}
                      onBlur={handleConfirmPasswordInputOnBlur}
                    ></input>
                  </div>
                  {confirmPassword.errorActive && (
                    <div className="error-message">
                      {confirmPassword.errorMessage}
                    </div>
                  )}
                </div>
              </div>
              <div className="btnBox">
                <div className="lineContainerSignup">
                  <input className="checkboxSignup" type="checkbox" />
                  <label>
                    <a className="clickHere" onClick={openPopup} >
                      Click here! to share a bit about yourself.
                    </a>
                  </label>
                </div>
                <div className="lineContainerSignup">
                  <input className="checkboxSignup" type="checkbox"  />
                  <label className="clickHere">
                    <a>I accept the terms & conditions of the app</a>
                  </label>
                </div>

                <button
                  className="signInBtn"
                  onClick={(e) => goToFeaturesScreen(e)}
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="backToLoginBtn">
              <h6 className="signupRegHere" >
                Already Registered? Log in here.{" "}
                <span className="regBtn" onClick={goToLoginScreen}> Login</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="titleAnim col-6">
          <img src="./chillogo.png" alt="logosignup" />
        </div>
      </div>
      <div>{isPopupOpen && <UserInfo onClose={closePopup} />}</div>
    </div>
  );
};

export default SignupScreen;
