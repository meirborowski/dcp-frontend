import React, { useState } from 'react';
import './css/MediaCard.css';
import VideoPlayer from './VideoPlayer';


function MediaCard({ title, image, video }) {
    const [playing, setPlaying] = useState(false);

    const handleClick = () => {
        setPlaying(!playing);
    };

    return (
        <div className="media-card" onClick={handleClick}>
            {playing && <VideoPlayer url={video} isOpen={playing} onClose={handleClick} />}
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