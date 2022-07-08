import React from 'react';
import "./css/IconButton.css";

function IconButton({ children, onClick }) {
    return (
        <div className="icon-button" onClick={onClick}>
            {children}
        </div>
    )
}

export default IconButton;