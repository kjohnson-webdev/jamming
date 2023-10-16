import React from 'react';

import Track from '../track/Track';

function Playlist() {
    return (
        <div>
            <h2>Playlist</h2>
            <input placeholder="New Playlist" /><button>Save to Spotify</button>
            <Track />
        </div>
    )
}

export default Playlist;