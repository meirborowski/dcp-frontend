import React from 'react';
import './css/MediaCard.css';

function MediaCard({ title, image, onClick }) {
    return (
        <div className="media-card" onClick={onClick}>
            <div className="media-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="media-card-title">
                {title}
            </div>
        </div>
    )
}

export default MediaCard;