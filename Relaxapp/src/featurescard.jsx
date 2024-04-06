import React, { useState } from 'react';
import './features.css';

const FeaturesCard = ({ cards, onCardClick }) => {
    const [linkOpen, setLinkOpen] = useState(Array(cards.length).fill(false));

    const openLink = (index) => {
        setLinkOpen((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
        });
    };

    const closeLink = (index) => {
        setLinkOpen((prev) => {
            const newState = [...prev];
            newState[index] = false;
            return newState;
        });
    };

    return (
        <div className="features-container">
            {cards.map((card, index) => (
                <div
                    key={index}
                    onClick={() => onCardClick(card.id)}
                    className="feature-card"
                    onMouseOver={() => openLink(index)}
                    onMouseLeave={() => closeLink(index)}
                >
                    <div className='blurDiv'>
                        <div className='imgDiv'><img className='feature-img' src={card.img}></img></div>
                        <span className="feature-name">{card.name}</span>
                        <div className="feature-desc">{card.desc}</div>
                    </div>
                    {linkOpen[index] && <div className='card-link'>Deep dive to unwind!</div>}
                </div>
            ))}
        </div>
    );
};

export default FeaturesCard;
