import React from 'react';

import Tracklist from '../tracklist/Tracklist';

function Playlist(props) {
    return (
        <div>
            <h2>Playlist</h2>
            <input placeholder="New Playlist" /><button>Save to Spotify</button>
            <Tracklist tracks={props.playlistTracks} />
        </div>
    )
}

export default Playlist;