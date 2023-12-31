import React, { useRef } from 'react';
import './features.css';
import { useNavigate } from "react-router-dom";
import FeaturesCard from './featurescard';

const Features = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 'music',
      img: 'listenMusic.png',
      name: 'MUSIC',
      desc: 'Feel the magic of music as it paints your emotions. Let it be the colorful brush that brightens your world.',
    },
    {
      id: 'meditation',
      img: 'doMeditation.png',
      name: 'MEDITATION',
      desc: 'Explore calm with meditation. Let it lead you to a peaceful state, bringing tranquility to your mind and body.',
    },
    {
      id: 'motivation',
      img: 'listenMotivation.png',
      name: 'MOTIVATIONAL VIDEOS',
      desc: 'Find motivation in videos. Let them inspire and drive you, bringing positive energy and encouragement to your spirit.',
    },
    {
      id: 'reels',
      img: 'reels.png',
      name: 'REELS',
      desc: 'Experience the peace of your soul in short videos. Capture moments that soothe and bring joy to your heart',
    },
    {
      id: 'friend',
      img: 'friend.png',
      name: 'MAKE A FRIEND',
      desc: 'Connect with others to discover new friends and build meaningful connections, enhancing your social experience',
    },
    {
      id: 'books',
      img: 'reading.png',
      name: 'RELAX WITH READING',
      desc: 'Take a break and find peace in the pages of a good book. Relax your mind, unwind, and let the words soothe your soul',
    },
  ];

  const goToIndividualScreens = (cardId) =>{
     switch(cardId)
      {
         case 'music' :  navigate('/Music');
         break;
         case 'meditation' :  navigate('/Meditation');
         break;
         case 'motivation' :  navigate('/Motivation');
         break;
         case 'friend' :  navigate('/Friend');
         break;
         case 'books' :  navigate('/Books');
         break;
         case 'reels' :  navigate('/Reels');
         break;
         default : break;
      }  
    }


  const containerRef = useRef(null);

  const scrollBy = (scrollAmount) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div>
      <div className='heading'>CHILL OUT</div>
      <div className='subHeading'> Pick your favorite genres and let your soul relax! </div>
      <div className='bees' title="Click to scroll for more features">
        <div onClick={() => (scrollBy(-200))}><img className='leftBee' src="./move.png" alt="Left Bee" /></div>
        <div onClick={() => (scrollBy(200))}><img className='rightBee' src="./move.png" alt="Right Bee" /></div>
      </div>
      <div ref={containerRef} className="featuresBox">
        <FeaturesCard cards={cards} onCardClick={goToIndividualScreens}></FeaturesCard>
      </div>
    </div>
  );
};

export default Features;
