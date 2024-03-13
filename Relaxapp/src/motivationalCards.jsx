import React, { useState } from "react";
import './motivation.css';
import ShowMotivationVideo from "./showMotivationVideo";

const MotivationalCards = ({MotivationalSpeakersList} ) =>{

    const [selectedMotivation, setSelectedMotivation] = useState(null);
    const [isMotivationOpen, setMotivationOpen] = useState(false);
   
    const onSelectedMeditation = (index) => {
        setSelectedMotivation(MotivationalSpeakersList[index]);
        setMotivationOpen(true);
      document.body.style.overflow = 'hidden';
    };
  
    const closePopup = () => {
        setMotivationOpen(false);
      document.body.style.overflow = 'scroll';
    };
  

    return (
        <div className="cards-container-wrapper">
        <div className="books-container">
          {MotivationalSpeakersList.map((item, index) => (
            <div
              key={index}
              onClick={() => onSelectedMeditation(index)}
              className="card-box"
              title="Simply tap the card to experience instant relaxation"
            >
              <div className="img-card-div">
                <img
                  className="motivation-img-width"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="book-card-name">{item.name}</div>
            </div>
          ))}
        </div>
  
        {selectedMotivation && isMotivationOpen && (
          <div className={`popup-container ${isMotivationOpen ? "active" : ""}`}>
            <div className="popup">
              <ShowMotivationVideo motivationalSpeaker = {selectedMotivation} close={closePopup} />
            </div>
          </div>
        )}
      </div>
    )

}

export default MotivationalCards;