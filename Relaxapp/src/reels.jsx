import React from 'react';
import './features.css';
import DisplayReels from './displayreels';
import SideBar from './SideBar';


const Reels = () => {
  return(
    <div className='d-flex'>
      <div className='side-menu'>
        <SideBar/>
      </div>
      <div className='col-9'>
        <DisplayReels></DisplayReels>
      </div>
     
    </div>
  )

}

export default Reels;
