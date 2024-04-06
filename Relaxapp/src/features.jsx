import React, { useRef, useState } from "react";
import "./features.css";
import { useNavigate } from "react-router-dom";
import UserDetails from "./userDetails";
import AppLogo from "./appLogo";
import FeaturesCard from "./featurescard";
import SideBar from "./SideBar";
const Features = () => {
  const navigate = useNavigate();
  const [sidebarWidth, setSidebarWidth] = useState(5);
  const [featureBoxWidth, setFeatureBoxWidth] = useState(95);

  const handleMouseEnter = () => {
    setSidebarWidth(15);
    setFeatureBoxWidth(85);
  };

  const handleMouseLeave = () => {
    setSidebarWidth(5);
    setFeatureBoxWidth(95);
  };
 
  const cards = [
    {
      id: "music",
      img: "listenMusic.png",
      name: "MUSIC",
      // desc: "Feel the magic of music as it paints your emotions. Let it be the colorful brush that brightens your world.",
    },
    {
      id: "meditation",
      img: "doMeditation.png",
      name: "MEDITATION",
      // desc: "Explore calm with meditation. Let it lead you to a peaceful state, bringing tranquility to your mind and body.",
    },
    {
      id: "motivation",
      img: "listenMotivation.png",
      name: "MOTIVATIONAL VIDEOS",
      // desc: "Find motivation in videos. Let them inspire and drive you, bringing positive energy and encouragement to your spirit.",
    },
    {
      id: "reels",
      img: "reels.png",
      name: "REELS",
      // desc: "Experience the peace of your soul in short videos. Capture moments that soothe and bring joy to your heart",
    },
    {
      id: "friend",
      img: "friend.png",
      name: "MAKE A FRIEND",
      // desc: "Connect with others to discover new friends and build meaningful connections, enhancing your social experience",
    },
    {
      id: "books",
      img: "reading.png",
      name: "RELAX WITH READING",
      // desc: "Take a break and find peace in the pages of a good book. Relax your mind, unwind, and let the words soothe your soul",
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

  return (
    <div className="featuresScreen">
      <div className="sideBarWidth"  style={{ width: `${sidebarWidth}vw` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <SideBar />
      </div>

    
        <div className="featuresBox"  style={{ width: `${featureBoxWidth}vw` }}>
        <div>
            {/* <AppLogo></AppLogo>  */}
          </div>
          <FeaturesCard
            cards={cards}
            onCardClick={goToIndividualScreens}
          ></FeaturesCard>
        </div>
     
    </div>
  );
};

export default Features;
