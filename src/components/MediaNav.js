import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./css/MediaNav.css";

function MediaNav({ categories }) {
    const location = useLocation();
    const path = location.pathname.split('/')[2];

    return (
        <nav className="media-nav">
            <ul className="media-nav__list">
                {categories.map(category => (
                    <li key={category} className={path === category.toLowerCase().split(' ')[0] ? 'media-nav__item media-nav__item--active' : 'media-nav__item'}>
                        <Link to={`/media/${category.toLowerCase().split(' ')[0]}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MediaNav