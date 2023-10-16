import React from 'react';

function Track({ name, artist, album, duration }) {
    return (
        <div>
            <h3>{name}</h3>
            <p><span>{artist}</span> | <span>{album}</span></p>
            <p>{duration}</p>
        </div>
    );
};

export default Track;