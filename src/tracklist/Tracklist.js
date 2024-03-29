import React, { useState } from 'react';
import Track from '../track/Track';

function Tracklist( { tracks, playlistTracks, isInPlaylist, addTrack, removeTrack, } ) {
    //format track duration from ms to mm:ss
    function formatDuration(duration_ms) {
        const minutes = Math.floor((duration_ms/1000)/60);
        const seconds = Math.floor((duration_ms/1000) % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    };


    return (
        <div>
            {tracks.map((track) => (
                <Track 
                    key={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                    duration={formatDuration(track.duration)}
                    // isInPlaylist={isInPlaylist(track.id)}
                    addTrack={() => addTrack(track)}
                    removeTrack={() => removeTrack(track)}
                />
            ))}
        </div>
    );
};

export default Tracklist;