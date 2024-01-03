import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./sidemenu.css";

const SideMenu = () => {
  const location = useLocation();
  const [textColor, setTextColor] = useState('');
  const selectedCard = location.state?.selectedCard || '';

  const changeTextColor = (id) =>{
    setTextColor(id);
  } 


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
        <Link to="/Music" className={`feature-text ${selectedCard === 'music' ? 'highlight' : ''}`}>Music</Link>
        <Link to="/Meditation" className={`feature-text ${selectedCard === 'meditation' ? 'highlight' : ''}`}>Meditation</Link>
        <Link to="/Motivation" className={`feature-text ${selectedCard === 'motivation' ? 'highlight' : ''}`}>Motivation</Link>
        <Link to="/Friend" className={`feature-text ${selectedCard === 'friend' ? 'highlight' : ''}`}>Make a friend</Link>
        <Link to="/Reels" className={`feature-text ${selectedCard === 'reels' ? 'highlight' : ''}`}>Reels</Link>
        <Link to="/Books" className={`feature-text ${selectedCard === 'books' ? 'highlight' : ''}`}>Read a book</Link>
      </div>
      <div className='d-flex preference'>
        <div className='col-5 menu'>Preference</div>
        <div className='col-7 line'></div>
      </div>
      <div className='profile-list'>
      <div onClick={ () => changeTextColor('profile')} className={`feature-text ${textColor === 'profile' ? 'highlight' : ''}`}>My Profile</div>
      <div onClick={ () => changeTextColor('settings')} className={`feature-text ${textColor === 'settings' ? 'highlight' : ''}`}>Settings</div>
      </div>
      <div className='d-flex support'>
        <div className='col-5 menu'>Support</div>
        <div className='col-7 line'></div>
      </div>
      <div className='profile-list'>
      <div onClick={ () => changeTextColor('help')} className={`feature-text ${textColor === 'help' ? 'highlight' : ''}`}>Help & Support</div>
      </div>
    </div>
  );
};

export default SideMenu;
