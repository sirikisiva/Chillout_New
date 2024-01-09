// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import UserInfo from "./userinfo";
// import "./signup.css";

// const SignupScreen = () => {
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { ...errors };

//     if (!formData.name) {
//       newErrors.name = "Please enter your name";
//       isValid = false;
//     } else {
//       newErrors.name = "";
//     }

//     if (!formData.email) {
//       newErrors.email = "Please enter your email";
//       isValid = false;
//     } else {
//       newErrors.email = "";
//     }

//     if (!formData.password) {
//       newErrors.password = "Please enter your password";
//       isValid = false;
//     } else {
//       newErrors.password = "";
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const goToFeaturesScreen = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       navigate("/Features");
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     validateForm();
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
//     <div className="signUpScreen">
//       <div className="signUpCard">
//         <div className="titleBox">
//           <h3 className="login">Join us today!</h3>
//           <p className="caption">Sign up now to become a member.</p>
//         </div>
//         <div className="inputsBox">
//           <div className="npInputContainer">
//             <label className="inputLabel">Username</label>
//             <input
//               type="text"
//               name="newPassword"
//               value={formData.name}
//               placeholder="enter username"
//               className="npInputStyle"
//               // onChange={newPasswordOnHandle}
//               // onBlur={newPasswordValidateOnBlur}
//             />
//             {errors.name && <div className="error-message">{errors.name}</div>}
//           </div>
//           <div className="npInputContainer">
//             <label className="inputLabel">Email</label>
//             <input
//               type="text"
//               name="newPassword"
//               value={formData.name}
//               placeholder="enter user email"
//               className="npInputStyle"
//               // onChange={newPasswordOnHandle}
//               // onBlur={newPasswordValidateOnBlur}
//             />
//             {errors.name && <div className="error-message">{errors.name}</div>}
//           </div>
//           <div className="npInputContainer">
//             <label className="inputLabel">Set password</label>
//             <input
//               type="text"
//               name="newPassword"
//               value={formData.name}
//               placeholder="set password"
//               className="npInputStyle"
//               // onChange={newPasswordOnHandle}
//               // onBlur={newPasswordValidateOnBlur}
//             />
//             {errors.name && <div className="error-message">{errors.name}</div>}
//           </div>
//           <div className="npInputContainer">
//             <label className="inputLabel">Confirm Password</label>
//             <input
//               type="text"
//               name="newPassword"
//               value={formData.name}
//               placeholder="confirm password"
//               className="npInputStyle"
//               // onChange={newPasswordOnHandle}
//               // onBlur={newPasswordValidateOnBlur}
//             />
//             {errors.name && <div className="error-message">{errors.name}</div>}
//           </div>
//         </div>

//         <div className="box3">
//                <div className="lineContainerSignup">         <input className="checkboxSignup" type="checkbox" />
//                 <label>
//               <a className="clickHere" onClick={openPopup} >
//                    Click here! to share a bit about yourself.
//                  </a>
//                 </label>

//                </div>
//                <div className="lineContainerSignup">
//                <input className="checkboxSignup" type="checkbox" />
//                 <label  className="clickHere">
//                 <a>
//                  I accept the terms & conditions of the app
//                  </a>
//                 </label>

//                </div>

//                <button className="npSignInBtn"  onClick={(e) => goToFeaturesScreen(e)}>
//                Sign Up
//                </button>
//             </div>
//       </div>
//       <div>Logo</div>
//     </div>
//   );
// };

// export default SignupScreen;

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

  const goToFeaturesScreen = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/Features");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
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
        {/* <div className="firstView">
        <img src="./logoWithName.png" alt="logoWithName.png" className="signupLogo"/>
        <div>
          <b>Registration and Profile Creation:</b>
          <p>
            Easily sign up and create your personalized profile on Chill Out.
            Share your interests, favorite genres, and create a digital persona
            that reflects your unique taste.
          </p>
        </div>
        <div>
          <b> Discover Music and Books:</b>
          <p>
            Immerse yourself in a world of soothing melodies and captivating
            literature. Chill Out provides a curated selection of music and book
            recommendations tailored to your preferences. Whether you're into
            mellow tunes or engaging novels, there's something for everyone.
          </p>
        </div>
        <div>
          <b>Dive into a Literary Escape: </b>
          <p>
            Escape into the world of literature with our vast collection of
            e-books and audiobooks. Whether you prefer to read or listen, Chill
            Out provides a diverse range of titles to captivate your
            imagination. Unwind with a captivating story or explore new
            perspectives with our thought-provoking selection.
          </p>
        </div>
        <div>
          <b>Forge Lasting Connections: </b>
          <p>
            Chill Out goes beyond entertainment, offering a unique social
            platform to connect with like-minded individuals. Make friends who
            share your taste in music and books, creating bonds that transcend
            virtual borders. Our community is built on shared passions,
            fostering a welcoming environment for meaningful conversations.
          </p>
        </div>
      </div> */}
        <div className="loginContainer col-6">
          <div className="card">
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
                      value={formData.name}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  {errors.name && (
                    <div className="error-message">{errors.name}</div>
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
                      value={formData.email}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  {errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>
                <div className="inputContainer">
                  <div>
                    <label className="inputLabel">Password </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="set password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="inputStyle"
                    ></input>
                  </div>
                  {errors.password && (
                    <div className="error-message">{errors.password}</div>
                  )}
                </div>
                <div className="inputContainer">
                  <div>
                    <label className="inputLabel">Confirm Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="confirm password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="inputStyle"
                    ></input>
                  </div>
                  {errors.password && (
                    <div className="error-message">{errors.password}</div>
                  )}
                </div>
              </div>
              <div className="btnBox">
                <div className="lineContainerSignup">
                  <input className="checkboxSignup" type="checkbox" />
                  <label>
                    <a className="clickHere" onClick={openPopup}>
                      Click here! to share a bit about yourself.
                    </a>
                  </label>
                </div>
                <div className="lineContainerSignup">
                  <input className="checkboxSignup" type="checkbox" />
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
              <h6 className="signupRegHere" onClick={goToLoginScreen}>
                Already Registered? Log in here.{" "}
                <span className="regBtn"> Login</span>
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
