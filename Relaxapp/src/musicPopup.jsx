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




import React from "react";

const MusicPopup = ({ calmSongs, onClose, modelTitle }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1>{modelTitle}</h1>
        <ul>
          {calmSongs.map((song, index) => (
            <React.Fragment key={index}>
              <audio src={song.song} controls type="audio/mp3" />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicPopup;