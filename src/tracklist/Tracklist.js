import React from 'react';
import Track from '../track/Track';
import mockTracks from '../SpotifyUtility';

function Tracklist() {
    const tracks = mockTracks;
    return (
        <div>
            <h2>Tracklist</h2>
            {mockTracks.map((track) => (
                <Track 
                    key={track.id}
                    name={track.name}
                    artist={track.artists[0].name}
                    album={track.album.name}
                    duration={track.duration_ms}
                />
            ))}
        </div>
    )
}

export default Tracklist;