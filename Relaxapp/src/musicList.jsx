import React, {useState} from "react";
import "./musicCards.css";

const MusicList = ({ list, heading, onSongSelect, imgList, onPlayAll }) => {
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const handlePlayAll = () => {
    if (onPlayAll && typeof onPlayAll === "function") {
      setIsPlayingAll(true);
      onPlayAll(list);
    }
  };

  
  if (!list || !Array.isArray(list) || list.length === 0) {
    return (
      <div>
        {heading && <div className="music-heading">{heading}</div>}
        <div className="d-flex justify-content-center no-songs">No songs available</div>
      </div>
    );
  }
  return (
    <div className="d-flex">
      <div className="col-4">
       <div className="d-flex justify-content-center"><img className="selected-img" src={imgList}></img></div>
       <div className="d-flex justify-content-center p-4"> <div className="play-all" onClick={handlePlayAll}>Play All</div></div>
      </div>
      <div className="col-8 selected-card-list">
      <div className="music-heading-fixed">{heading && 
      <div className="music-heading">{heading}</div>     
      }
      </div>
     <div>
     <div className="d-flex">
              <div className="col-3 track"># TRACK</div>
              <div className="col-3"></div>
              <div className="col-3 artist-name-heading">ARTISTS</div>
              <div className="col-3 track">DURATION</div>
            </div>

      {list.map((song, index) => (
        <div
          key={index}
          className="music-list"
          onClick={() => onSongSelect(song)}
        >
          <div className="d-flex">
            <div className="col-3 p-2 d-flex align-items-center">
                <div className="p-2 font-color"> {song.id}</div>
                <div>  <img src={song.imgSrc} className="img-border"></img></div>

              </div>  
               <div className="col-3 p-2 d-flex align-items-center font-color">{song.songName}</div>  
            <div className="col-3 p-2 d-flex align-items-center font-color">{song.artist}</div>
            <div className="col-3 p-2 d-flex align-items-center font-color">{song.duration}</div>
          </div>
        </div>
      ))}
     </div>
      </div>
    </div>
  );
};

export default MusicList;
