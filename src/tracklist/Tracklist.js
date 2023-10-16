import React from 'react';
import Track from '../track/Track';
import mockTracks from '../SpotifyUtility';

function Tracklist() {
    const tracks = mockTracks;

    function formatDuration(duration_ms) {
        const minutes = Math.floor((duration_ms/1000)/60);
        const seconds = Math.floor((duration_ms/1000) % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }

    return (
        <div>
            <h2>Tracklist</h2>
            {mockTracks.map((track) => (
                <Track 
                    key={track.id}
                    name={track.name}
                    artist={track.artists[0].name}
                    album={track.album.name}
                    duration={formatDuration(track.duration_ms)}
                />
            ))}
        </div>
    )
}

export default Tracklist;