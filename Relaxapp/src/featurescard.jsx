import React from 'react';
import './features.css';

const FeaturesCard = ({ cards }) => {
    return (
        <div className="features-container">
            {cards.map((card, index) => (
                <div key={index} className="feature-card">
                    <div className='imgDiv'><img className='feature-img' src={card.img}></img></div>
                    <div className="feature-name">{card.name}</div>
                    <div className="feature-desc">{card.desc}</div>
                </div>
            ))}
        </div>
    );
}

export default FeaturesCard;
