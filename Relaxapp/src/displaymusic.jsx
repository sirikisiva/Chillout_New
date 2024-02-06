// import React, { useState } from "react";
// import AppLogo from "./appLogo";
// import MusicCards from "./musicCards";
// import MusicPopup from "./musicPopup";
// import { calmMusicList, sleepMusicList } from "./musicData";

// const DisplayMusic = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCard(null);
//     setModalOpen(false);
//   };

//   const musicCards = [
//     {
//       id: "one",
//       img: "musicOne.jpg",
//       name: "Calm Music",
//       mapId: 1,
//       calmSongs: [
//         { song: "calmMusic.mp3", id: "calmone" },
//         { song: "calmMusic.mp3", id: "calmtwo" },
//         { song: "calmMusic.mp3", id: "calmthree" },
//       ],
//     },
//     {
//       id: "two",
//       img: "musicTwo.jpg",
//       name: "Stress Relief Music",
//     },
//     {
//       id: "three",
//       img: "musicThree.jpg",
//       name: "Sleep Music",
//     },
//     {
//       id: "four",
//       img: "musicFour.jpg",
//       name: "Depression Relief Music",
//     },
//     {
//       id: "five",
//       img: "musicFive.jpg",
//       name: "Anxiety Relief Music",
//     },
//     {
//       id: "six",
//       img: "musicSix.jpeg",
//       name: "Anger Relief Music",
//     },
//   ];

//   return (
//     <div>
//       <div>
//         <MusicCards musicCards={musicCards} onCardClick={handleCardClick} />
//       </div>
//       {modalOpen && selectedCard && (
//         <MusicPopup
//           modelTitle={selectedCard.name}
//           calmSongs={selectedCard.calmSongs || []}
//           onClose={handleCloseModal}
//         />
//       )}
//     </div>
//   );
// };

// export default DisplayMusic;

import React, { useRef, useState, useEffect } from "react";
import AppLogo from "./appLogo";
import MusicCards from "./musicCards";
import MusicPopup from "./musicPopup";
import "./musicCards.css";
import MusicList from "./musicList";
import MusicTimer from "./musicTimer";
import { calmMusicList, sleepMusicList } from "./musicData";

const DisplayMusic = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setModalOpen(false);
  };

  const musicCards = [
    {
      id: "one",
      img: "musicOne.jpg",
      name: "Calm Music",
      mapId: 1,
      calmSongs: [
        { song: "calmMusic.mp3", id: "calmone" },
        { song: "calmMusic.mp3", id: "calmtwo" },
        { song: "calmMusic.mp3", id: "calmthree" },
        { song: "calmMusic.mp3", id: "calmFour" },
        { song: "calmMusic.mp3", id: "calmthree" },
        { song: "calmMusic.mp3", id: "calmthree" },
        { song: "calmMusic.mp3", id: "calmthree" },
        { song: "calmMusic.mp3", id: "calmthree" },
        { song: "calmMusic.mp3", id: "calmthree" },
        { song: "calmMusic.mp3", id: "calmthree" },
      ],
    },
    {
      id: "two",
      img: "musicTwo.jpg",
      name: "Stress Relief Music",
    },
    {
      id: "three",
      img: "musicThree.jpg",
      name: "Sleep Music",
    },
    {
      id: "four",
      img: "musicFour.jpg",
      name: "Depression Relief Music",
    },
    {
      id: "five",
      img: "musicFive.jpg",
      name: "Anxiety Relief Music",
    },
    {
      id: "six",
      img: "musicSix.jpeg",
      name: "Anger Relief Music",
    },
  ];

  const containerRef = useRef(null);

  const scrollBy = (scrollAmount) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div>
      <div className="d-flex">
        <div className="col-10 cards-heading">
          Dive into Relaxation with Our Collection of Soothing Music Cards
        </div>
        <div className="bees col-2" title="Click to scroll for more features">
          <div onClick={() => scrollBy(-200)}>
            <img className="leftBee" src="./move.png" alt="Left Bee" />
          </div>
          <div onClick={() => scrollBy(200)}>
            <img className="rightBee" src="./move.png" alt="Right Bee" />
          </div>
        </div>
      </div>
      <div ref={containerRef} className="featuresBox">
        <MusicCards musicCards={musicCards} onCardClick={handleCardClick} />
      </div>
      <div className="d-flex">
      <div className="col-8 selected-card-list">
      {selectedCard && <MusicList list={selectedCard.calmSongs || []} heading={selectedCard.name} />}
      </div>
      <div className="col-4">
       <MusicTimer></MusicTimer>
      </div>
   </div>
    </div>
  );
};

export default DisplayMusic;
