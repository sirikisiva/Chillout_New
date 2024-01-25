import React, { useState} from 'react';
import './features.css';
import DisplayBooks from './displaybooks';
import SideBar from './SideBar';


const Books = () => {

  
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

  return(
    <div className='d-flex'>
      <div className='side-menu' style={{ width: `${sidebarWidth}vw` }}  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <SideBar/>
      </div>
      <div className='books-menu' style={{ width : `${featureBoxWidth}vw`}}>
        <DisplayBooks></DisplayBooks>
      </div>
      
    </div>
  )

}

export default Books;
