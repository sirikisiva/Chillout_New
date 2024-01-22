import React from 'react';
import './features.css';

const FeaturesCard = ({ cards, onCardClick }) => {
    return (
        <div className="features-container">
            {cards.map((card, index) => (
                <div key={index} onClick={() => onCardClick(card.id)} className="feature-card">
                    <div className='imgDiv'><img className='feature-img' src={card.img}></img></div>
                    <span className="feature-name">{card.name}</span>
                    {/* <div className="feature-desc">{card.desc} */}
                    <span className='card-link'>Click Open</span>
                    {/* </div> */}
                </div>
            ))}
        </div>
    );
}

export default FeaturesCard;
