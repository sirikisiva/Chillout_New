import React, { useState } from "react";
import "./meditation.css";
import ShowMeditationVideos from "./showMeditationVideos";

const MeditationCards = ({ meditationList }) => {
  const [selectedMeditation, setSelectedMeditation] = useState(null);
  const [isMeditationOpen, setMeditationOpen] = useState(false);
 
  const onSelectedMeditation = (index) => {
    setSelectedMeditation(meditationList[index]);
    setMeditationOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setMeditationOpen(false);
    document.body.style.overflow = 'scroll';
  };

  return (
    <div className="cards-container-wrapper">
      <div className="books-container">
        {meditationList.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelectedMeditation(index)}
            className="card-box"
            title="Simply tap the card to experience instant relaxation"
          >
            <div className="img-card-div">
              <img
                className="book-img-width"
                src={item.img}
                alt={item.meditationType}
              />
            </div>
            <div className="book-card-name">{item.meditationType}</div>
          </div>
        ))}
      </div>

      {selectedMeditation && isMeditationOpen && (
        <div className={`popup-container ${isMeditationOpen ? "active" : ""}`}>
          <div className="popup">
            <ShowMeditationVideos medType={selectedMeditation.meditationType} mediVideo={selectedMeditation.meditationVideo} close={closePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MeditationCards;
