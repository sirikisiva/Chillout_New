import React from 'react';
import SideMenu from './sidemenu';
import './features.css';


const Reels = () => {
  return(
    <div className='d-flex'>
      <div className='col-3 side-menu'>
        <SideMenu></SideMenu>
      </div>
      <div className='col-9'></div>
      
    </div>
  )

}

export default Reels;
