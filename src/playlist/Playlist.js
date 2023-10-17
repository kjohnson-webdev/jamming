import React from 'react';

import Tracklist from '../tracklist/Tracklist';

function Playlist( {playlistTracks} ) {

    return (
        <div>
            <h2>Playlist</h2>
            <input placeholder="New Playlist" /><button>Save to Spotify</button>
            <Tracklist tracks={playlistTracks} />
        </div>
    )
}

export default Playlist;