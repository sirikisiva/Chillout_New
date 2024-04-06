import React from "react";
import { useNavigate } from "react-router-dom";
import "./logo.css";

const LogoScreen = () => {
  const navigate = useNavigate();

  const goToLoginScreen = () => {
    navigate("/LoginScreen");
  };

  return (
    <div className="logoScreen">
      <div className="startLogo">
        <div className="logoWithName">
          {/* <img className="" src="./unwind.png" alt="logo"  /> */}
          <video className="video" loop autoPlay muted playsInline>
        <source src="./unwindVideo.mp4" type="video/mp4" />
      </video>
        </div>
        <div className="startContent">
          <h1>Look through Unwind</h1>
          <p>
            Welcome to UNWIND, your all-in-one haven for relaxation,
            entertainment, and building meaningful connections! 
          </p>
          <b>Discover Your Perfect Playlist </b>
          <p>
            Embark on a musical journey tailored just for you. UNWIND provides a curated selection of music and book recommendations tailored to your preferences. Whether you're into mellow tunes or engaging novels, there's something for everyone.  
          </p>
        </div>
     
      <div className="startContent2">
        <b>Boost Your Mood:</b>
        <p>
          Boost Your Mood: Elevate your spirits with UNWIND's mood-boosting
          features.
        </p>
        <b>Relax and Recharge: </b>
        <p>
          Feeling stressed or overwhelmed? Let UNWIND be your sanctuary.
          Engage in guided meditation sessions, calming sounds, and mindfulness
          exercises to rejuvenate your mind and body.
        </p>
      </div>
      </div>
      <div className="signIn" onClick={goToLoginScreen}>
        Get Started
      </div>
    </div>
  );
};

export default LogoScreen;
