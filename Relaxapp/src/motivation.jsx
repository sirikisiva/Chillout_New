import React from 'react';
import './features.css';
import DisplayMotivation from './displaymotivation';
import SideBar from './SideBar';


const Motivation = () => {
  return(
    <div className='d-flex'>
      <div className='side-menu col-2'>
       <SideBar/>
      </div>
      <div className='col-10'>
      <DisplayMotivation></DisplayMotivation>
      </div>
     
    </div>
  )

}

export default Motivation;
