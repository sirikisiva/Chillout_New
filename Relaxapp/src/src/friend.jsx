import React from 'react';
import SideMenu from './sidemenu';
import './features.css';
import DisplayFriends from './displayfriends';


const Friend = () => {
  return(
    <div className='d-flex'>
      <div className='col-3 side-menu'>
        <SideMenu></SideMenu>
      </div>
      <div className='col-9'>
      <DisplayFriends></DisplayFriends>
      </div>
     
    </div>
  )

}

export default Friend;
