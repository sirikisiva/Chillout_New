import React, {useState} from "react";
import './meditation.css';
import ShowMeditationVideos from "./showMeditationVideos";

const MeditationCards = ({ meditationList }) => {
    const [selectedMeditation, setSelectedMeditation] = useState(null);

    

  const onSelectedMeditation = (index) =>{
    setSelectedMeditation(meditationList[index]);
  
  }



  return (
    <div className="cards-container-wrapper">
      <div className="books-container">
        {meditationList.map((item, index) => (
          <div key={index}  onClick={ () =>onSelectedMeditation(index) } className="card-box">
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

      {selectedMeditation && (
          <div>
          <ShowMeditationVideos
            imgList={selectedMeditation.img}
            meditationType={selectedMeditation.meditationType}
            meditationVideo = {selectedMeditation.meditationVideo}
          />
        </div>
      )}
    </div>
  );
};

export default MeditationCards;
