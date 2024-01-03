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
    <div className="signUpScreen">
      <div className="firstView">
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
      </div>
      <div className="secondView">
        <div className="signUpCard">
          <div className="viewOne">
            <div>
              <h3>SignUp</h3>
              <p>Few clicks away from registration</p>
              <p>Create Account!</p>
            </div>
            <div>
              <p>Already have an account?</p>
              <p onClick={goToLoginScreen} className="loginBtn">
                Login
              </p>
            </div>
          </div>
          <div className="viewTwo">
            <form>
              <div className="inputContainer">
                <label className="inputLabel">NAME </label>
                <input
                  type="text"
                  name="name"
                  className="inputStyle"
                  value={formData.name}
                  onChange={handleInputChange}
                ></input>
                {errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </div>
              <div className="inputContainer">
                <label className="inputLabel">EMAIL </label>
                <input
                  type="email"
                  name="email"
                  className="inputStyle"
                  value={formData.email}
                  onChange={handleInputChange}
                ></input>
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>
              <div className="inputContainer">
                <label className="inputLabel">PASSWORD </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="inputStyle"
                ></input>
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>

              <button className="signUpBtn" onClick={goToFeaturesScreen}>
                SignUp
              </button>
            </form>
          </div>
          <div className="viewThree"></div>
          <a className="clickHere" onClick={openPopup} href="clickHere">
            Share feedback
          </a>
        </div>
      </div>
      <div>{isPopupOpen && <UserInfo onClose={closePopup} />}</div>
    </div>
  );
};

export default SignupScreen;

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

//   const goToFeaturesScreen = () => {
//     if (validateForm()) {
//       navigate("/Features");
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
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
//       <div className="d-flex">
//         <div className="col-7">
//           <div>
//             <div className="newAccount signUp">Create new Account</div>
//             <div className="registered signUp" onClick={goToLoginScreen}>
//               Already Registered? Log in here.
//             </div>
//           </div>
//           <div className="signupBox">
//             <div className="orangeBackground"></div>
//             <div className="signupFormBox">
//               <form>
//                 <div className="fields">
//                   <label className="labelName">NAME </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="inputField"
//                   ></input>
//                   {errors.name && (
//                     <div className="error-message">{errors.name}</div>
//                   )}
//                 </div>
//                 <div className="field">
//                   <label className="labelName">EMAIL </label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="inputField"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   ></input>
//                   {errors.email && (
//                     <div className="error-message">{errors.email}</div>
//                   )}
//                 </div>
//                 <div className="field">
//                   <label className="labelName">PASSWORD </label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="inputField"
//                   ></input>
//                   {errors.password && (
//                     <div className="error-message">{errors.password}</div>
//                   )}
//                 </div>

//                 <a className="clickHere" onClick={openPopup}>
//                   Click here! to share a bit about yourself and enhance your
//                   overall app journey.
//                 </a>

//                 <div className="submit" onClick={goToFeaturesScreen}>
//                   Sign Up
//                 </div>
//               </form>
//             </div>
//             <div className="blueBackground"></div>
//           </div>
//         </div>
//         <div className="col-5 animated-col"></div>
//       </div>

//       <div>{isPopupOpen && <UserInfo onClose={closePopup} />}</div>
//     </div>
//   );
// };

// export default SignupScreen;
