import React from "react";
import "./musicCards.css";

const MusicList = ({ list, heading, onSongSelect }) => {
  if (!list || !Array.isArray(list) || list.length === 0) {
    return (
      <div>
        {heading && <div className="music-heading">{heading}</div>}
        <div className="d-flex justify-content-center no-songs">No songs available</div>
      </div>
    );
  }
  return (
    <div>
      <div>{heading && 
      <div className="music-heading">{heading}</div>     
      }
      </div>
      <div className="d-flex">
              <div className="col-3 track"># TRACK</div>
              <div className="col-5"></div>
              <div className="col-4 artist-name-heading">ARTISTS</div>
            </div>

      {list.map((song, index) => (
        <div
          key={index}
          className="music-list"
          onClick={() => onSongSelect(song)}
        >
          <div className="d-flex">
            <div className="col-3 p-2 d-flex align-items-center">
                <div className="p-2"> {song.id}</div>
                <div>  <img src={song.imgSrc} width={100} className="img-border"></img></div>

              </div>  
               <div className="col-5 p-2 d-flex align-items-center">{song.songName}</div>  
            <div className="col-4 p-2 d-flex align-items-center">{song.artist}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicList;
