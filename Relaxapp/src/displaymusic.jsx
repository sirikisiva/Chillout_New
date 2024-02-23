import React, { useState } from "react";
import "./musicCards.css";
import MusicCards from "./musicCards";
import MusicList from "./musicList";
import MusicTimer from "./musicTimer";

const DisplayMusic = ({ musicCardsData, onSongSelect }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const handleSongSelect = (song) => {
    // Pass the selected song to the parent component
    onSongSelect(song);
  };

  const handlePlayAll = (songList) => {
    setIsPlayingAll(true);
    songList.forEach((song, index) => {
      setTimeout(() => {
        handleSongSelect(song);
        if (index === songList.length - 1) {

          setIsPlayingAll(false);
        }
      }, index * 1000); 
    });
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
        <div className='col-12'>
          {selectedCard && (
            <MusicList imgList = {selectedCard.img} list={selectedCard.calmSongs || []} heading={selectedCard.name} onSongSelect={handleSongSelect}   onPlayAll={handlePlayAll}/>
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

