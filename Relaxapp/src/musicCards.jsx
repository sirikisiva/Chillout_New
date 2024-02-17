// import React, { useState } from "react";
// import "./musicCards.css";

// const MusicCards = ({ musicCards, onCardClick, selectedCard }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div>
//       <div
//         className={`cards-container ${isHovered ? "stop-movement" : ""}`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {musicCards.map((card, index) => (
//           <div
//             key={index}
//             className={`card-box ${isHovered ? "stop-movement" : ""}`}
//             onClick={() => onCardClick(card)}
//           >
//             <div className="img-card-div">
//               <img className="img-width" src={card.img} alt={card.name} />
//             </div>
//             <div className="music-name">{card.name}</div>
//           </div>
//         ))}
//       </div>

//       {selectedCard === null && (
//         <div>
//            {/* <div className="d-flex justify-content-center animate-image"><img className="select-card-img" src="./selectCard.png"></img></div> */}
//           <div className="no-card-selected-message animate-fade-in">click on the card to make your mind chill</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MusicCards;
import React, { useState } from "react";
import "./musicCards.css";

const MusicCards = ({ musicCards, onCardClick, selectedCard }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="cards-container-wrapper">
      <div
        className={`cards-container ${isHovered ? "stop-movement" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Repeat cards to ensure loop */}
        {musicCards.map((card, index) => (
          <div
            key={index}
            className={`card-box ${isHovered ? "stop-movement" : ""}`}
            onClick={() => onCardClick(card)}
          >
            <div className="img-card-div">
              <img className="img-width" src={card.img} alt={card.name} />
            </div>
            <div className="music-name">{card.name}</div>
          </div>
        ))}
        {/* Repeat cards again to ensure loop */}
        {musicCards.map((card, index) => (
          <div
            key={index}
            className={`card-box ${isHovered ? "stop-movement" : ""}`}
            onClick={() => onCardClick(card)}
          >
            <div className="img-card-div">
              <img className="img-width" src={card.img} alt={card.name} />
            </div>
            <div className="music-name">{card.name}</div>
          </div>
        ))}
      </div>

      {selectedCard === null && (
        <div>
           {/* <div className="d-flex justify-content-center animate-image"><img className="select-card-img" src="./selectCard.png"></img></div> */}
          <div className="no-card-selected-message animate-fade-in">click on the card to make your mind chill</div>
        </div>
      )}
    </div>
  );
};

export default MusicCards;
  