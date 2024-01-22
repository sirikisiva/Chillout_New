import React from 'react';
import './features.css';
import DisplayMusic from './displaymusic';
import SideBar from './SideBar';


const Music = () => {
  return(
    <div className='d-flex' >
      <div className='side-menu'>
        <SideBar/>
      </div>
      <div className='col-9'>
        <DisplayMusic></DisplayMusic>
      </div>
      
    </div>
  )

}

export default Music;
