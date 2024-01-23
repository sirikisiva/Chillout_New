import React from 'react';
import './features.css';
import DisplayReels from './displayreels';
import SideBar from './SideBar';


const Reels = () => {
  return(
    <div className='d-flex'>
      <div className='side-menu col-2'>
        <SideBar/>
      </div>
      <div className='col-10'>
        <DisplayReels></DisplayReels>
      </div>
     
    </div>
  )

}

export default Reels;
