import React from 'react';
import Card from './Card';
import './css/CardsGrid.css';

function CardsGrid({ cards }) {
    return (
        <div className="cards-grid">
            {cards.map(card => (
                <Card key={card.id} title={card.title} subtitle={card.subtitle} icon={card.icon} onClick={card.onClick} />
            ))}
        </div>
    )
}

export default CardsGrid;