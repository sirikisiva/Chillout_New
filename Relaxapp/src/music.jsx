// import React, { useState, useEffect } from "react";
// import "./features.css";
// import "./music.css";
// import DisplayMusic from "./displaymusic";
// import SideBar from "./SideBar";

// import "./AudioList.css";
// import MusicPlayer from "./MusicPlayer";
// import AppLogo from "./appLogo";
// import { musicCardsData } from "./data";

// const Music = () => {
//   const [sidebarWidth, setSidebarWidth] = useState(5);
//   const [featureBoxWidth, setFeatureBoxWidth] = useState(95);

//   const handleMouseEnter = () => {
//     setSidebarWidth(15);
//     setFeatureBoxWidth(85);
//   };

//   const handleMouseLeave = () => {
//     setSidebarWidth(5);
//     setFeatureBoxWidth(95);
//   };
//   const [audioData, setAudioData] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [songs, setSongs] = useState(musicCardsData);
//   const [song, setSong] = useState(songs[0].song);
//   const [img, setImage] = useState(songs[0].imgSrc);
//   const [auto, setAuto] = useState(false);

//   useEffect(() => {
//     const allSongs = document.querySelectorAll(".songs");
//     function changeActive() {
//       allSongs.forEach((n) => n.classList.remove("active"));
//       this.classList.add("active");
//     }

//     allSongs.forEach((n) => n.addEventListener("click", changeActive));
//   }, []);

//   const changeFavourite = (id) => {
//     const updatedSongs = songs.map((song) => {
//       if (song.id === id) {
//         return { ...song, favourite: !song.favourite };
//       }
//       return song;
//     });

//     setSongs(updatedSongs);
//   };

//   const setMainSong = (songSrc, imgSrc) => {
//     setSong(songSrc);
//     setImage(imgSrc);
//     setAuto(true);
//   };

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };
//   return (
//     <div className="d-flex">
//       <div
//         className="side-menu"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={{ width: `${sidebarWidth}vw` }}
//       >
//         <SideBar />
//       </div>
//       <div className="music-menu" style={{ width: `${featureBoxWidth}vw` }}>
//         <div>
//           <AppLogo></AppLogo>
//         </div>
//         <div className="d-flex mb-4">
//           <div className="col-8 mt-4">
//             <input
//               placeholder="Search Here!"
//               type="search"
//               className="search-bar"
//             ></input>
//           </div>
//           <div className="col-4 mt-4 d-flex justify-content-end">
//             <div className="d-flex  align-items-center">
//               <img src="likes.png" className="like-img"></img>
//             </div>
//             <div className="likes">My Likes</div>
//           </div>
//         </div>
//         <div>
//           <DisplayMusic></DisplayMusic>
//         </div>
//       </div>
//       <MusicPlayer
//       song={song} imgSrc={img} autoplay={auto}/>
//     </div>
//   );
// };

// export default Music;
//-----------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import "./features.css";
// import "./music.css";
// import DisplayMusic from "./displaymusic";
// import SideBar from "./SideBar";
// import MusicPlayer from "./MusicPlayer";
// import AppLogo from "./appLogo";
// import { musicCardsData } from "./data";

// const Music = () => {
//   const [sidebarWidth, setSidebarWidth] = useState(5);
//   const [featureBoxWidth, setFeatureBoxWidth] = useState(95);
//   const [selectedSong, setSelectedSong] = useState(null);

//   const handleMouseEnter = () => {
//     setSidebarWidth(15);
//     setFeatureBoxWidth(85);
//   };

//   const handleMouseLeave = () => {
//     setSidebarWidth(5);
//     setFeatureBoxWidth(95);
//   };


//   const [isPlaying, setIsPlaying] = useState(false);
//   const [songs, setSongs] = useState(musicCardsData[0].calmSongs);
//   const [song, setSong] = useState(songs[0].song);
//   const [img, setImage] = useState(songs[0].imgSrc);
//   const [auto, setAuto] = useState(false);

//   useEffect(() => {
//     const allSongs = document.querySelectorAll(".songs");
//     const changeActive = function () {
//       allSongs.forEach((n) => n.classList.remove("active"));
//       this.classList.add("active");
//     };

//     allSongs.forEach((n) => n.addEventListener("click", changeActive));

//     return () => {
//       allSongs.forEach((n) => n.removeEventListener("click", changeActive));
//     };
//   }, []);

//   const changeFavourite = (id) => {
//     const updatedSongs = songs.map((song) => {
//       if (song.id === id) {
//         return { ...song, favourite: !song.favourite };
//       }
//       return song;
//     });

//     setSongs(updatedSongs);
//   };

//   const setMainSong = (songSrc, imgSrc) => {
//     setSong(songSrc);
//     setImage(imgSrc);
//     setAuto(true);
//   };

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="d-flex">
//       <div
//         className="side-menu"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={{ width: `${sidebarWidth}vw` }}
//       >
//         <SideBar />
//       </div>
//       <div className="music-menu" style={{ width: `${featureBoxWidth}vw` }}>
//         <div>
//           <AppLogo />
//         </div>
//         <div className="d-flex mb-4">
//           <div className="col-8 mt-4">
//             <input
//               placeholder="Search Here!"
//               type="search"
//               className="search-bar"
//             ></input>
//           </div>
//           <div className="col-4 mt-4 d-flex justify-content-end">
//             <div className="d-flex  align-items-center">
//               <img src="likes.png" className="like-img" alt="likes"></img>
//             </div>
//             <div className="likes">My Likes</div>
//           </div>
//         </div>
//         <DisplayMusic musicCardsData={musicCardsData} onSongSelect={setSelectedSong} />
//         <div
//           style={{
//             borderWidth: 10,
//             borderColor: "red",
//             width: "80%%",
//             alignSelf:"center"
//           }}
//         >
//           {selectedSong && (  <MusicPlayer
           
        
//             changeFavourite={changeFavourite}
//             setMainSong={setMainSong}
//             togglePlay={togglePlay}
//             song={selectedSong.song}
//             imgSrc={selectedSong.imgSrc}
//             autoplay={true}
//             />
//             )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Music;
//-----------------------------------------------------------------



// Music.js

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
          <AppLogo />
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
              <img src="likes.png" className="like-img" alt="likes"></img>
            </div>
            <div className="likes">My Likes</div>
          </div>
        </div>
        <DisplayMusic musicCardsData={musicCardsData} onSongSelect={setSelectedSong} />
        <div
          style={{
            borderWidth: 10,
            borderColor: "red",
            width: "80%%",
            alignSelf:"center"
          }}
        >
          {selectedSong && (  <MusicPlayer
            changeFavourite={changeFavourite}
            setMainSong={setMainSong}
            togglePlay={togglePlay}
            song={selectedSong.song}
            imgSrc={selectedSong.imgSrc}
            autoplay={true}
            />
            )}
        </div>
      </div>
    </div>
  );
};

export default Music;
