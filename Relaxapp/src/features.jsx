import React, { useRef, useState } from "react";
import "./features.css";
import { useNavigate } from "react-router-dom";
import UserDetails from "./userDetails";
import AppLogo from "./appLogo";
import FeaturesCard from "./featurescard";
import SideBar from "./SideBar"
const Features = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleScreen = () => {
    setIsExpanded(!isExpanded);
  };


  const cards = [
    {
      id: "music",
      img: "listenMusic.png",
      name: "MUSIC",
      desc: "Feel the magic of music as it paints your emotions. Let it be the colorful brush that brightens your world.",
    },
    {
      id: "meditation",
      img: "doMeditation.png",
      name: "MEDITATION",
      desc: "Explore calm with meditation. Let it lead you to a peaceful state, bringing tranquility to your mind and body.",
    },
    {
      id: "motivation",
      img: "listenMotivation.png",
      name: "MOTIVATIONAL VIDEOS",
      desc: "Find motivation in videos. Let them inspire and drive you, bringing positive energy and encouragement to your spirit.",
    },
    {
      id: "reels",
      img: "reels.png",
      name: "REELS",
      desc: "Experience the peace of your soul in short videos. Capture moments that soothe and bring joy to your heart",
    },
    {
      id: "friend",
      img: "friend.png",
      name: "MAKE A FRIEND",
      desc: "Connect with others to discover new friends and build meaningful connections, enhancing your social experience",
    },
    {
      id: "books",
      img: "reading.png",
      name: "RELAX WITH READING",
      desc: "Take a break and find peace in the pages of a good book. Relax your mind, unwind, and let the words soothe your soul",
    },
  ];

  const goToIndividualScreens = (cardId) => {
    switch (cardId) {
      case "music":
        navigate("/Music", { state: { selectedCard: cardId } });
        break;
      case "meditation":
        navigate("/Meditation", { state: { selectedCard: cardId } });
        break;
      case "motivation":
        navigate("/Motivation", { state: { selectedCard: cardId } });
        break;
      case "friend":
        navigate("/Friend", { state: { selectedCard: cardId } });
        break;
      case "books":
        navigate("/Books", { state: { selectedCard: cardId } });
        break;
      case "reels":
        navigate("/Reels", { state: { selectedCard: cardId } });
        break;
      default:
        break;
    }
  };

  const containerRef = useRef(null);

  // const scrollBy = (scrollAmount) => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollLeft += scrollAmount;
  //   }
  // };

  return (
    <div>

      {/* <div className='heading'>CHILL OUT</div>
      <div className='subHeading'> Pick your favorite genres and let your soul relax! </div>
      <div className='bees' title="Click to scroll for more features">
        <div onClick={() => (scrollBy(-200))}><img className='leftBee' src="./move.png" alt="Left Bee" /></div>
        <div onClick={() => (scrollBy(200))}><img className='rightBee' src="./move.png" alt="Right Bee" /></div>
      </div>
      <div ref={containerRef} className="featuresBox">
        <FeaturesCard cards={cards} onCardClick={goToIndividualScreens}></FeaturesCard>
      </div> */}


      <div  className="d-flex bg">
        <div className={`${isExpanded ? "menu-min" : "menu-max"}`}  >
        <SideBar/>
        {/* <div className="toggleIcon">
            <img  onClick={toggleScreen} className="toggleWidth" src={isExpanded ? './rightArrow.png' : './leftArrow.png'}height={30} width={30} alt="arrow png"/>
        </div> */}
        {/* <UserDetails ButtonProps={isExpanded }></UserDetails> */}
        </div>
        <div className={`${isExpanded ? "screen-min" : "screen-max"}`}>
          <div>
            <AppLogo></AppLogo> 
          </div>
          <div>
        
            {/* <div className="bees" title="Click to scroll for more features">
              <div onClick={() => scrollBy(-200)}>
                <img className="leftBee" src="./move.png" alt="Left Bee" />
              </div>
              <div onClick={() => scrollBy(200)}>
                <img className="rightBee" src="./move.png" alt="Right Bee" />
              </div>
            </div> */}
            <div ref={containerRef} className="featuresBox">
              <FeaturesCard
                cards={cards}
                onCardClick={goToIndividualScreens}
              ></FeaturesCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
