import React from 'react';
import Track from '../track/Track';

function Tracklist(props) {
    //format track duration from ms to mm:ss
    function formatDuration(duration_ms) {
        const minutes = Math.floor((duration_ms/1000)/60);
        const seconds = Math.floor((duration_ms/1000) % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    };

    console.log(props.tracks);

    return (
        <div>
            {props.tracks.map((track) => (
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
};

export default Tracklist;