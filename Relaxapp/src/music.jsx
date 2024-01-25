import React, {useState} from 'react';
import './features.css';
import DisplayMusic from './displaymusic';
import SideBar from './SideBar';


const Music = () => {

    const [sidebarWidth, setSidebarWidth] = useState(5);
    const [featureBoxWidth, setFeatureBoxWidth] = useState(95)
  
    const handleMouseEnter = () => {
      setSidebarWidth(15);
      setFeatureBoxWidth(85);
    };
  
    const handleMouseLeave = () => {
      setSidebarWidth(5);
      setFeatureBoxWidth(95);
    };
  
  return(
    <div className='d-flex' >
      <div className='side-menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
      style={{ width : `${sidebarWidth}vw`}}>
        <SideBar/>
      </div>
      <div className='music-menu' style={{ width : `${featureBoxWidth}vw`}}>
        <DisplayMusic></DisplayMusic>
      </div>
      
    </div>
  )

}

export default Music;
