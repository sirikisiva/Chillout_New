import React from 'react';
import './musicCards.css'

const MusicCards = ( {musicCards, onCardClick}) =>{
  
    return(
        <div className='cards-container'>
            {
                musicCards.map((card, index) => (
                   <div key={index} className='card-box' onClick={() => onCardClick(card)}>
                     <div className='music-name'>{card.name}</div>
                     <div className='img-card-div'><img  className='img-width' src={card.img}></img></div>
                    </div>
                ))
            }


        </div>
    )

}

export default MusicCards