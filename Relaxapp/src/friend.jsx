import React from 'react';
import './features.css';
import DisplayFriends from './displayfriends';
import SideBar from './SideBar';


const Friend = () => {
  return(
    <div className='d-flex'>
      <div className='side-menu'>
        <SideBar/>
      </div>
      <div className='col-9'>
      <DisplayFriends></DisplayFriends>
      </div>
     
    </div>
  )

}

export default Friend;
