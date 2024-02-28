import React, { useState } from "react";
import MeditationCards from "./meditationCards";
import "./meditation.css";

const DisplayMeditation = () => {
  const meditationList = [
    {
      id: 1,
      img: "meditationImageOne.jpg",
      meditationType: "Letting Go into Sleep",
      meditationVideo: "meditationVideo.mp4",
    },
    {
      id: 2,
      img: "meditationImageTwo.jpg",
      meditationType: "Easing Depression",
      meditationVideo: "meditationVideoTwo.mp4",
    },
    {
      id: 3,
      img: "meditationImageThree.jpg",
      meditationType: "Anxiety Release",
    },
    {
      id: 4,
      img: "meditationImageFour.jpg",
      meditationType: "Breath Counting Meditation",
    },
    {
      id: 5,
      img: "meditationImageFive.jpg",
      meditationType: "Zen Meditation",
    },
    {
      id: 6,
      img: "meditationImageSix.jpg",
      meditationType: "Nature Meditation",
    },
    {
      id: 7,
      img: "meditationImageOne.jpg",
      meditationType: "Mantra Meditation",
    },
    {
      id: 8,
      img: "meditationImagetwo.jpg",
      meditationType: "Gratitude Meditation",
    },
  ];

  const [searchMeditionType, setSearchMeditationType] = useState("");
  const [filterMeditionType, setFilterMeditationType] = useState([]);

  const searchMeditationForRelaxation = (e) => {
    const meditation = e.target.value.toLowerCase();
    setSearchMeditationType(meditation);

    const filtered = meditationList.filter((med) =>
      med.meditationType.toLowerCase().includes(meditation)
    );
    setFilterMeditationType(filtered);
  };

  return (
    <div>
      <div className="d-flex mb-4 justify-content-center">
        <div className="mt-4 search-width">
          <input
            placeholder="Search here for more meditation videos!"
            type="search"
            className="search-bar"
            value={searchMeditionType}
            onChange={searchMeditationForRelaxation}
          ></input>
        </div>
      </div>
      <div className="d-flex">
        <div className="col-12 dive-relax">
          {filterMeditionType.length === 0 && searchMeditionType.length > 0 ? (
            <div>
              <p className="d-flex justify-content-center">No matches found for "{searchMeditionType}"</p>
              <img className="no-match" src="./wrongsearch.png"></img>
            </div>
          ) : (
            <p>
              Dive into Relaxation with Our Collection of Meditation Videos!
            </p>
          )}
        </div>
      </div>
      <div className="featuresBox">
        <MeditationCards
          meditationList={
            searchMeditionType.length ? filterMeditionType : meditationList
          }
        ></MeditationCards>
      </div>
    </div>
  );
};

export default DisplayMeditation;
