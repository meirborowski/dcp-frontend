import React, { useState, useEffect } from 'react';
import MediaGrid from './MediaGrid';

function MediaCategory({ category }) {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        fetch(`http://dcp2022.ddns.net:40000/category/list/${category}`)
            .then(response => response.json())
            .then(data => {
                setLibrary(data);
            }
            );

        console.log(library);
    }, [category]);

    return (
        <>
            <MediaGrid cards={library} />
        </>
    )
}

export default MediaCategory;