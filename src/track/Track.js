import React from 'react';
import mockTracks from '../SpotifyUtility';

function Track() {
    const track = mockTracks[1];
    return (
        <div>
            <h3>{track.name}</h3>
            <p><span>{track.artists[0].name}</span> | <span>{track.album.name}</span></p>
            <p>{track.duration_ms}</p>
        </div>
    );
};

export default Track;