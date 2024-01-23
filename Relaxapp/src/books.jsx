import React from 'react';
import './features.css';
import DisplayBooks from './displaybooks';
import SideBar from './SideBar';


const Books = () => {
  return(
    <div className='d-flex'>
      <div className='side-menu col-2'>
        <SideBar/>
      </div>
      <div className='col-10'>
        <DisplayBooks></DisplayBooks>
      </div>
      
    </div>
  )

}

export default Books;
