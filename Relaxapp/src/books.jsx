import React from 'react';
import SideMenu from './sidemenu';
import './features.css';
import DisplayBooks from './displaybooks';


const Books = () => {
  return(
    <div className='d-flex'>
      <div className='col-3 side-menu'>
        <SideMenu></SideMenu>
      </div>
      <div className='col-9'>
        <DisplayBooks></DisplayBooks>
      </div>
      
    </div>
  )

}

export default Books;
