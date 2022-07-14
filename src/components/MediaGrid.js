import React from 'react';
import MediaCard from './MediaCard';
import './css/MediaGrid.css';

function MediaGrid({ cards })
{
    return (
        <div className="media-cards-grid">
            {cards.map((card, index) => (
                <MediaCard key={index} title={card.content.description.shortTitle} image={card.content.pictures.cover.file.filename} video={card.content.videos.movie.file.filename} />
            ))}
        </div>
    )
}

export default MediaGrid;