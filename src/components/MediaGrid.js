import React from 'react';
import MediaCard from './MediaCard';
import './css/MediaGrid.css';

function MediaGrid({ cards }) {
    return (
        <div className="media-cards-grid">
            {cards.map((card, index) => (
                <MediaCard key={index} title={card.content.description.shortTitle} image={'http://dcp2022.ddns.net:' + card.content.pictures.cover.file.filename.split(':')[2]} video={'http://dcp2022.ddns.net:' + card.content.videos.movie.file.filename.split(':')[2]} />
            ))}
        </div>
    )
}

export default MediaGrid;