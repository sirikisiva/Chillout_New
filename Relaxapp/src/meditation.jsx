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
          <div className="col-7 d-flex justify-content-center">
            <img src="./peacefulMed.png"></img>
          </div>
          <div className="col-5">
            <div className="books-heading">Breathe In Books - Exhale Relaxation</div>
            <div className="books-subheading">Reading is the key that unlocks the doors of the mind, offering solace and escape to a world where imagination knows no bounds, and tranquility finds its home in the pages of a good book.</div>
          </div>
        </div>
        <div className="d-flex mb-4 justify-content-center">
          <div className="mt-4 search-width">
            <input
              placeholder="Search Here!"
              type="search"
              className="search-bar"
            ></input>
          </div>
        </div>
        <DisplayMeditation></DisplayMeditation>
      </div>
    </div>
  );
};

export default Meditation;
