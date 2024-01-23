import React from 'react';
import './features.css';
import DisplayMeditation from './displaymeditation';
import SideBar from './SideBar';


const Meditation = () => {
  return(
    <div className='d-flex'>
      <div className='side-menu col-2' >
        <SideBar/>
      </div>
      <div className='col-10'>
      <DisplayMeditation></DisplayMeditation>
      </div>
      
    </div>
  )

}

export default Meditation;
