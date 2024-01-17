import React from 'react';
import SideMenu from './sidemenu';
import './features.css';
import DisplayMusic from './displaymusic';


const Music = () => {
  return(
    <div className='d-flex'>
      <div className='col-3 side-menu'>
        <SideMenu></SideMenu>
      </div>
      <div className='col-9'>
        <DisplayMusic></DisplayMusic>
      </div>
      
    </div>
  )

}

export default Music;
