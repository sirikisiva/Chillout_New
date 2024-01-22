import React from 'react';
import './features.css';
import DisplayMeditation from './displaymeditation';
import SideBar from './SideBar';


const Meditation = () => {
  return(
    <div className='d-flex'>
      <div className='side-menu' >
        <SideBar/>
      </div>
      <div className='col-9'>
      <DisplayMeditation></DisplayMeditation>
      </div>
      
    </div>
  )

}

export default Meditation;
