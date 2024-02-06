import React from 'react';
import './musicCards.css';
import MusicList from './musicList';
import MusicTimer from './musicTimer';

const MusicCards = ({ musicCards, onCardClick }) => {
  return (
   <div>
      <div className='cards-container'>
      {musicCards.map((card, index) => (
        <div key={index} className='card-box' onClick={() => onCardClick(card)}>
          <div className='img-card-div'><img className='img-width' src={card.img} alt={card.name} /></div>
          <div className='music-name'>{card.name}</div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default MusicCards;