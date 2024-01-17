import React from 'react';
import SideMenu from './sidemenu';
import './features.css';
import DisplayMeditation from './displaymeditation';


const Meditation = () => {
  return(
    <div className='d-flex'>
      <div className='col-3 side-menu'>
        <SideMenu></SideMenu>
      </div>
      <div className='col-9'>
      <DisplayMeditation></DisplayMeditation>
      </div>
      
    </div>
  )

}

export default Meditation;
