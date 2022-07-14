import React, { useState, useEffect } from 'react';
import MediaCard from './MediaCard';

function LiveMedia()
{
    const [channels, setChannels] = useState([]);

    useEffect(() =>
    {
        fetch('http://192.168.100.1:40000/category/list/live%20tv')
            .then(response => response.json())
            .then(data =>
            {
                setChannels(data.LiveList);
            }
            );
    }, []);

    return (
        <div className="media-cards-grid">
            {channels.map((channel, index) => (
                <MediaCard key={index} title={channel.channel_name} image={channel.icon} video={channel.Url} />
            ))}
        </div>
    )
}

export default LiveMedia;