import React, { useState, useEffect } from "react";
import "./features.css";
import "./music.css";
import DisplayMusic from "./displaymusic";
import SideBar from "./SideBar";
import { AudioList } from "./AudioList";
import AppLogo from "./appLogo";
import MusicList from "./musicList";
import MusicTimer from "./musicTimer";

const Music = () => {
  const [sidebarWidth, setSidebarWidth] = useState(5);
  const [featureBoxWidth, setFeatureBoxWidth] = useState(95);

  const handleMouseEnter = () => {
    setSidebarWidth(15);
    setFeatureBoxWidth(85);
  };

  const handleMouseLeave = () => {
    setSidebarWidth(5);
    setFeatureBoxWidth(95);
  };
  const [audioData, setAudioData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetchAudioData();
  }, []);

  const fetchAudioData = async () => {
    try {
      // Dummy API URL for audio data
      const response = await fetch("https://dummyapi.com/audio");
      const data = await response.json();
      console.log(data);
      setAudioData(data);
    } catch (error) {
      console.error("Error fetching audio data:", error);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="d-flex">
      <div
        className="side-menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: `${sidebarWidth}vw` }}
      >
        <SideBar />
      </div>
      <div className="music-menu" style={{ width: `${featureBoxWidth}vw` }}>
        <div>
          <AppLogo></AppLogo>
        </div>
        <div className="d-flex mb-4">
          <div className="col-8 mt-4">
            <input
              placeholder="Search Here!"
              type="search"
              className="search-bar"
            ></input>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-end">
            <div className="d-flex  align-items-center">
              <img src="likes.png" className="like-img"></img>
            </div>
            <div className="likes">My Likes</div>
          </div>
        </div>
        <div>
          <DisplayMusic></DisplayMusic>
        </div>
      </div>
    </div>
  );
};

export default Music;
