// import React from "react";
// import "./musicCards.css";

// const MusicList = ({ list, heading }) => {
//   if (!list || !Array.isArray(list)) {
//     return <div>No songs available</div>;
//   }

//   return (
//     <div>
//       {heading && (
//         <div>
//           <div  className="music-list-heading">{heading}</div>
//         </div>
//       )}

//       {list.map((song, index) => (
//         <div key={index} className="music-list">
//           <audio controls className="audio-player">
//             <source src={song.song} type="audio/mp3" />
//           </audio>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MusicList;

import React from "react";
import "./musicCards.css";

const MusicList = ({ list, onSongSelect }) => {
  return (
    <div>
      {list.map((song, index) => (
        <div key={index} className="music-list" onClick={() => onSongSelect(song)}>
          <p>{song.songName}</p>
        </div>
      ))}
    </div>
  );
};

export default MusicList;


