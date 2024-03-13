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
          {/* <img className="" src="./logo.gif" alt="logo"  /> */}
          {/* <video src="./CHILL OUT.mp4"></video> */}
          <video className="video" loop autoPlay muted playsInline>
        <source src="./CHILL OUT.mp4" type="video/mp4" />
      </video>
        </div>
        <div className="startContent">
          <h1>Look through Chillout</h1>
          <p>
            Welcome to Chill Out, your all-in-one haven for relaxation,
            entertainment, and building meaningful connections! 
          </p>
          <b>Discover Your Perfect Playlist </b>
          <p>
            Embark on a musical journey tailored just for you. Chill Out provides a curated selection of music and book recommendations tailored to your preferences. Whether you're into mellow tunes or engaging novels, there's something for everyone.  
          </p>
        </div>
     
      <div className="startContent2">
        <b>Boost Your Mood:</b>
        <p>
          Boost Your Mood: Elevate your spirits with Chill Out's mood-boosting
          features.
        </p>
        <b>Relax and Recharge: </b>
        <p>
          Feeling stressed or overwhelmed? Let Chill Out be your sanctuary.
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
