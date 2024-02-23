import React, { useState, useEffect } from "react";
import "./features.css";
import "./music.css";
import DisplayMusic from "./displaymusic";
import SideBar from "./SideBar";
import MusicPlayer from "./MusicPlayer";
import AppLogo from "./appLogo";
import { musicCardsData } from "./data";

const Music = () => {
  const [sidebarWidth, setSidebarWidth] = useState(5);
  const [featureBoxWidth, setFeatureBoxWidth] = useState(95);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleMouseEnter = () => {
    setSidebarWidth(15);
    setFeatureBoxWidth(85);
  };

  const handleMouseLeave = () => {
    setSidebarWidth(5);
    setFeatureBoxWidth(95);
  };


  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(musicCardsData[0].calmSongs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    const changeActive = function () {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    };

    allSongs.forEach((n) => n.addEventListener("click", changeActive));

    return () => {
      allSongs.forEach((n) => n.removeEventListener("click", changeActive));
    };
  }, []);

  const changeFavourite = (id) => {
    const updatedSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, favourite: !song.favourite };
      }
      return song;
    });

    setSongs(updatedSongs);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="d-flex music-feature-container">
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
          {/* <AppLogo /> */}
        </div>
        <div className="d-flex mb-4 justify-content-center">
          <div className="mt-4 search-width">
            <input
              placeholder="Search Here!"
              type="search"
              className="search-bar"
            ></input>
          </div>
        </div>
        <DisplayMusic musicCardsData={musicCardsData} onSongSelect={setSelectedSong} />
        <div className="d-flex" style={{ width: "100%" }}>
          {selectedSong &&  <div style={{ width: "100%" }}> 
              <MusicPlayer
                changeFavourite={changeFavourite}
                setMainSong={setMainSong}
                togglePlay={togglePlay}
                song={selectedSong.song}
                imgSrc={selectedSong.imgSrc}
                name={selectedSong.songName}
               
              />
            </div>}
         
        </div>
      </div>
    </div>
  );
};

export default Music;
