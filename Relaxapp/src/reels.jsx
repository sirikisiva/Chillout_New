import React from 'react';
import SideMenu from './sidemenu';
import './features.css';
import DisplayReels from './displayreels';


const Reels = () => {
  return(
    <div className='d-flex'>
      <div className='col-3 side-menu'>
        <SideMenu></SideMenu>
      </div>
      <div className='col-9'>
        <DisplayReels></DisplayReels>
      </div>
     
    </div>
  )

}

export default Reels;
