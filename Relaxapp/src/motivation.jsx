import React from 'react';
import SideMenu from './sidemenu';
import './features.css';
import DisplayMotivation from './displaymotivation';


const Motivation = () => {
  return(
    <div className='d-flex'>
      <div className='col-3 side-menu'>
        <SideMenu></SideMenu>
      </div>
      <div className='col-9'>
      <DisplayMotivation></DisplayMotivation>
      </div>
     
    </div>
  )

}

export default Motivation;
