import React from 'react';
import './features.css';
import DisplayFriends from './displayfriends';
import SideBar from './SideBar';


const Friend = () => {
  return(
    <div className='d-flex'>
      <div className='side-menu col-2'>
        <SideBar/>
      </div>
      <div className='col-10'>
      <DisplayFriends></DisplayFriends>
      </div>     
    </div>
  )

}

export default Friend;
