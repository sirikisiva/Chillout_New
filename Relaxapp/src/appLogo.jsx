import React from "react";
import "./appLogo.css";

const AppLogo = () => {
  return (
    <div className="d-flex appLogo">
      <video className="video" loop autoPlay muted playsInline>
        <source src="featureVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default AppLogo;
