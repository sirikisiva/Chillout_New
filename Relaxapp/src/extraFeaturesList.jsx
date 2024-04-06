import React, { useState } from "react";
import SideBar from "./SideBar";

const ExtraFeatures = () => {
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
    <div className="featuresScreen">
      <div
        className="sideBarWidth"
        style={{ width: `${sidebarWidth}vw` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SideBar />
      </div>
      <div style={{ width: `${featureBoxWidth}vw` }}>
        <div>Diary (Memory Collector)</div>
        <div>Wellness Coaching Info</div>
        <div>Mind Relaxing Game</div>
        <div>List of Nutritional Food</div>
        <div>List of best nature places to explore</div>
      </div>
    </div>
  );
};

export default ExtraFeatures;
