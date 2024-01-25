import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { CiMusicNote1 } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { GoPlay } from "react-icons/go";
import { RiSettings3Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { RiSpeakLine } from "react-icons/ri";
import { GiMeditation } from "react-icons/gi";
import { RiHome3Line } from "react-icons/ri";
import  LogOutPopup from './logOutPopup';

const SideBar = () => {
  const [containerWidth, setContainerWidth] = useState(false);
  const [profileText, setProfileText] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);


  const handleContainerHover = () => {
    setContainerWidth(true);
    setProfileText(true);
  };

  const handleContainerLeave = () => {
    setContainerWidth(false);
    setProfileText(false);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  return (
    <div
      className="SideBarContainer"
      onMouseOver={handleContainerHover}
      onMouseLeave={handleContainerLeave}
      style={{ width: containerWidth ? "15vw" : "5vw" }}
    >
      <div className="profile">
        <IoPersonCircleOutline size="2em" />
        <div className={`profileName ${profileText ? 'visible' : 'hidden'}`}>
          <span>Profile</span>
          <h6>Username</h6>
        </div>
      </div>
      <div className="link-item-container">
      <div className="link-item">
          <Link className="sbLink" to="/Features">
            {containerWidth ? (
              <span className="link-title"> Home</span>
            ) : (
              <RiHome3Line size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Music">
            {containerWidth ? (
              <span className="link-title"> Music</span>
            ) : (
              <CiMusicNote1 size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Meditation">
            {containerWidth ? (
              <span className="link-title">Meditation</span>
            ) : (
              <GiMeditation size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Motivation">
            {containerWidth ? (
              <span className="link-title">Motivation</span>
            ) : (
              <RiSpeakLine size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Friend">
            {containerWidth ? (
              <span className="link-title">Friends</span>
            ) : (
              <LiaUserFriendsSolid size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Books">
            {containerWidth ? (
              <span className="link-title">Books</span>
            ) : (
              // <PiBooks size="1.5em" />
              <IoBookOutline  size="1.5em"/>
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Reels">
            {containerWidth ? (
              <span className="link-title">Reels</span>
            ) : (
              <GoPlay size="1.5em" />
            )}
          </Link>
        </div>
      </div>
      <div className="sideBarEndIcons">
        <div className="profile">
          <RiSettings3Line size="1.5em" />{" "}
          {containerWidth && <span className="link-title">Settings</span>}
        </div>
        <div className="profile">
          <CiLogout size="1.5em" />{" "}
          {containerWidth && <span className="link-title" onClick={openPopup}>Logout</span>}
        </div>
      </div>

      {/* <div>{isPopupOpen && <LogOutPopup onClose={closePopup} />}</div> */}
    </div>
  );
};
export default SideBar;
