import React, { useState, useEffect, useCallback } from 'react';
import MediaGrid from './MediaGrid';

function MediaCategory({ category }) {
    const [library, setLibrary] = useState([]);

    const fetchLibrary = useCallback(() => {
        fetch(`http://dcp2022.ddns.net:40000/category/list/${category}`)
            .then(response => response.json())
            .then(data => {
                setLibrary(data);
            });
    }, [category]);

    useEffect(() => {
        fetchLibrary();
    }, [category, fetchLibrary]);

    return (
        <>
            <MediaGrid cards={library} />
        </>
    )
}

export default MediaCategory;