import React, { useState } from "react";
import "./musicCards.css";
import MusicCards from "./musicCards";
import MusicList from "./musicList";
import MusicTimer from "./musicTimer";

const DisplayMusic = ({ musicCardsData, onSongSelect }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const handleSongSelect = (song) => {
    // Pass the selected song to the parent component
    onSongSelect(song);
  };
  return (
    <div>
      <div className="d-flex">
        <div className="col-10 cards-heading">
          Dive into Relaxation with Our Collection of Soothing Music
        </div>
      </div>
      <div className="featuresBox">
        <MusicCards selectedCard={selectedCard} musicCards={musicCardsData} onCardClick={handleCardClick} />
      </div>
      <div className="d-flex m-4">
        <div className={`col-12 ${selectedCard ? 'selected-card-list' : ''}`}>
          {selectedCard && (
            <MusicList list={selectedCard.calmSongs || []} heading={selectedCard.name} onSongSelect={handleSongSelect} />
          )}
        </div>
        {/* <div className={`col-4 ${selectedCard ? 'music-timer' : ''}`}>
          <MusicTimer />
        </div> */}
      </div>
    </div>
  );
};

export default DisplayMusic;

