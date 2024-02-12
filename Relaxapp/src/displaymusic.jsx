import React, { useRef, useState, useEffect } from "react";
import MusicCards from "./musicCards";
import "./musicCards.css";
import MusicList from "./musicList";
import MusicTimer from "./musicTimer";

const DisplayMusic = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let intervalId;

    const startAutoScroll = () => {
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      const targetScroll = containerRef.current.scrollLeft + 5;

      containerRef.current.style.transition = "scroll 1s linear";

      if (targetScroll >= maxScroll) {
        setTimeout(() => {
          containerRef.current.scrollLeft = 0;
          containerRef.current.style.transition = "none";
          setTimeout(() => {
            containerRef.current.style.transition = "scroll 1s linear";
            containerRef.current.scrollLeft = 5;
          }, 0);
        }, 1000);
      } else if (targetScroll <= maxScroll) {
        containerRef.current.scrollLeft = targetScroll;
      }
    };

    const handleMouseEnter = () => {
      clearInterval(intervalId);
    };

    const handleMouseLeave = () => {
      intervalId = setInterval(() => startAutoScroll(), 200);
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    intervalId = setInterval(() => startAutoScroll(), 200);

    return () => {
      const container = containerRef.current;

      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }

      clearInterval(intervalId);
    };
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
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

  return (
    <div>
      <div className="d-flex">
        <div className="col-10 cards-heading">
          Dive into Relaxation with Our Collection of Soothing Music
        </div>
      </div>
      <div ref={containerRef} className="featuresBox">
        <MusicCards musicCards={musicCards} onCardClick={handleCardClick} />
      </div>
      <div className="d-flex">
        <div className="col-8 selected-card-list">
          {selectedCard && (
            <MusicList list={selectedCard.calmSongs || []} heading={selectedCard.name} />
          )}
        </div>
        <div className="col-4">
          <MusicTimer></MusicTimer>
        </div>
      </div>
    </div>
  );
};

export default DisplayMusic;
