import React, {useState} from 'react';
import './features.css';
import DisplayMotivation from './displaymotivation';
import SideBar from './SideBar';


const Motivation = () => {

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
    <div className='d-flex'>
      <div className='side-menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
      style={{ width : `${sidebarWidth}vw`}}>
       <SideBar/>
      </div>
      <div className='motivation-menu'  style={{ width : `${featureBoxWidth}vw`}}>
      <DisplayMotivation></DisplayMotivation>
      </div>
     
    </div>
  )

}

export default Motivation;
