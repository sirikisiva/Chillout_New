import React, { useState } from "react";
import "./features.css";
import DisplayMeditation from "./displaymeditation";
import './meditation.css';
import AppLogo from "./appLogo";
import SideBar from "./SideBar";

const Meditation = () => {
  const [sidebarWidth, setSidebarWidth] = useState(5);
  const [featureBoxWidth, setFeatureBoxWidth] = useState(95);

  const handleMouseEnter = () => {
    setSidebarWidth(15);
    setFeatureBoxWidth(85);
  };

  const handleMouseLeave = () => {
    setSidebarWidth(5);
    setFeatureBoxWidth(95);
  };

  return (
    <div className="d-flex">
      <div
        className="side-menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: `${sidebarWidth}vw` }}
      >
        <SideBar />
      </div>
      <div
        className="meditation-menu"
        style={{ width: `${featureBoxWidth}vw` }}
      >
         <div className="d-flex">
          <div className="col-6 d-flex justify-content-center">
            <img src="./mindfull.png"></img>
          </div>
          <div className="col-6 d-flex justify-content-center flex-column ">
            <div className="meditation-heading">Breathe, Relax, Repeat - Easy Meditation Essentials</div>
            <div className="meditation-subheading">Calm your mind through meditation, fostering relaxation and clarity. Experience reduced stress and enhanced well-being with this simple practice.</div>
          </div>
        </div>
      
        <DisplayMeditation></DisplayMeditation>
      </div>
    </div>
  );
};

export default Meditation;
