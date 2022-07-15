import React from 'react';
import "./css/Card.css";

function Card({ icon, title, subtitle = "", onClick })
{
    return (
        <div className="card" onClick={onClick}>
            <div className="card-icon">
                <img src={"../images/" + icon} alt={title} />
            </div>
            <div className="card-title">
                <h3>{title} {subtitle}</h3>
            </div>
        </div>
    )
};

export default Card;