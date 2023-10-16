import React from 'react';

import Tracklist from '../tracklist/Tracklist';

function Playlist() {
    return (
        <div>
            <h2>Playlist</h2>
            <input placeholder="New Playlist" /><button>Save to Spotify</button>
            <Tracklist />
        </div>
    )
}

export default Playlist;