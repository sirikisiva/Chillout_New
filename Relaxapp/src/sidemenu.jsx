import React from 'react';
import "./sidemunu.css";

const SideMenu = () => {
  return (
    <div className='background'>
      <div className='sidemenu-logo'>
        <img className='img-logo' src="./buddha.png" alt="Logo"></img>
      </div>
      <div className='d-flex'>
        <div className='col-5 menu'>Menu</div>
        <div className='col-7 line'></div>
      </div>
      <div className='feature-list'>
        <div className='feature-text'>Music</div>
        <div className='feature-text'>Meditation</div>
        <div className='feature-text'>Motivation</div>
        <div className='feature-text'>Make a friend</div>
        <div className='feature-text'>Reels</div>
        <div className='feature-text'>Read a book</div>
      </div>
      <div className='d-flex preference'>
        <div className='col-5 menu'>Preference</div>
        <div className='col-7 line'></div>
      </div>
      <div className='profile-list'>
      <div className='feature-text'>My Profile</div>
      <div className='feature-text'>Settings</div>
      </div>
      <div className='d-flex support'>
        <div className='col-5 menu'>Support</div>
        <div className='col-7 line'></div>
      </div>
      <div className='profile-list'>
      <div className='feature-text'>Help & Support</div>
      </div>
    </div>
  );
};

export default SideMenu;
