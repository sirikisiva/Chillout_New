import React from 'react';
import './features.css';
import DisplayMusic from './displaymusic';
import SideBar from './SideBar';


const Music = () => {
  return(
    <div className='d-flex' >
      <div className='side-menu col-2'>
        <SideBar/>
      </div>
      <div className='col-10'>
        <DisplayMusic></DisplayMusic>
      </div>
      
    </div>
  )

}

export default Music;
