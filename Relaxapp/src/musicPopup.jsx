// import React from "react";

// const MusicPopup = ({ calmSongs, onClose, modelTitle }) => {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//          <h1>{modelTitle}</h1>
//         <ul>
//           {calmSongs.map((song, index) => (
//             <div key={index}><audio src={song.song} controls typeof="audio/mp3" /></div>

//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MusicPopup

import React, {useState} from "react";
import "./musicCards.css";
import MusicPlayer from "./MusicPlayer";

const MusicPopup = ({ calmSongs, onClose, modelTitle }) => {
  const [selectedTimer, setSelectedTimer] = useState(null);

  const handleTimerChange = (event) => {
    setSelectedTimer(event.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1 className="card-title">{modelTitle}</h1>
        <div className="d-flex songs-container">
          <div className="songs-list">
            {calmSongs.map((song, index) => (
              <React.Fragment key={index}>
               <div className="audio-wrapper"> <audio className="audio" src={song.song} controls type="audio/mp3" /></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="timer-dropdown">
          <label htmlFor="timer">Select Timer: </label>
          <select id="timer" onChange={handleTimerChange}>
            <option value={null}>None</option>
            <option value="5">5 minutes</option>
            <option value="10">15 minutes</option>
            <option value="15">25 minutes</option>
          </select>
        </div>
        <div> <MusicPlayer/>
          </div>
      </div>
    </div>
  );
};

export default MusicPopup;
