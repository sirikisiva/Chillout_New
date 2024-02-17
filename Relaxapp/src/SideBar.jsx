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
import LogOutPopup from "./logOutPopup";

const SideBar = () => {
  const [containerWidth, setContainerWidth] = useState(false);
  const [profileText, setProfileText] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [active, setActive] = useState("");

  const handleContainerHover = () => {
    setContainerWidth(true);
    setProfileText(true);
  };

  const handleContainerLeave = () => {
    setContainerWidth(false);
    setProfileText(false);
  };

  const activeLink = (link) => {
    setActive(link);
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
        <div className={`profileName ${profileText ? "visible" : "hidden"}`}>
          <span>Profile</span>
          <h6>Username</h6>
        </div>
      </div>
      <div className="link-item-container">
        <div className="link-item">
          <Link
            className={`sbLink ${active === "Features" ? "activeClass" : ""}`}
            to="/Features"
          >
            {containerWidth ? (
              <div className="feature-list">
                 <RiHome3Line size="1.5em" />
                <span className="link-title"> Home</span>
              </div>
            ) : (
              <RiHome3Line size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link
            className={`sbLink ${active === "Music" ? "activeClass" : ""}`}
            to="/Music"
          >
            {containerWidth ? (
              <div className="feature-list">
                {" "}
                <CiMusicNote1 size="1.5em" />
                <span className="link-title"> Music</span>
              </div>
            ) : (
              <CiMusicNote1 size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Meditation">
            {containerWidth ? (
              <div className="feature-list">
                <GiMeditation size="1.5em" />

                <span className="link-title">Meditation</span>
              </div>
            ) : (
              <GiMeditation size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Motivation">
            {containerWidth ? (
              <div className="feature-list">
                {" "}
                <RiSpeakLine size="1.5em" />
                <span className="link-title">Motivation</span>
              </div>
            ) : (
              <RiSpeakLine size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Friend">
            {containerWidth ? (
              <div className="feature-list">
                {" "}
                <LiaUserFriendsSolid size="1.5em" />{" "}
                <span className="link-title">Friends</span>
              </div>
            ) : (
              <LiaUserFriendsSolid size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Books">
            {containerWidth ? (
              <div className="feature-list">
                {" "}
                <IoBookOutline size="1.5em" />
                <span className="link-title">Books</span>
              </div>
            ) : (
              // <PiBooks size="1.5em" />
              <IoBookOutline size="1.5em" />
            )}
          </Link>
        </div>
        <div className="link-item">
          <Link className="sbLink" to="/Reels">
            {containerWidth ? (
              <div className="feature-list">
                {" "}
                <GoPlay size="1.5em" />
                <span className="link-title">Reels</span>
              </div>
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
          {containerWidth && (
            <span className="link-title" onClick={openPopup}>
              Logout
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
