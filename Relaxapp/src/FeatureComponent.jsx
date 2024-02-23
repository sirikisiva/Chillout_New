import React, { useState } from 'react';
import './features.css';
import DisplayMotivation from './displaymotivation';
import DisplayFriends from './displayfriends';
import SideBar from './SideBar';

 const FeatureComponent = ({ children }) => {
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
    <div className='d-flex'>
      <div
        className='side-menu'
        style={{ width: `${sidebarWidth}vw` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SideBar />
      </div>
      <div className='feature-menu' style={{ width: `${featureBoxWidth}vw` }}>
        {children}
      </div>
    </div>
  );
};


export default FeatureComponent;