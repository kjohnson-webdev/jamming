import React, { useCallback } from 'react';

import Tracklist from '../tracklist/Tracklist';

function Playlist( {playlistTracks, playlistName, setPlaylistName, addTrack} ) {
    const handleNameChange = useCallback((event) => {
        setPlaylistName(event.target.value);
    }, [setPlaylistName]);

    console.log(`Playlist name in Playlist.js is ${playlistName}`)
    return (
        <div>
            <h2>Playlist</h2>
            <input 
                placeholder="New Playlist" 
                value={playlistName}
                onChange={handleNameChange}
            />
            <button>Save to Spotify</button>
            <Tracklist 
                tracks={playlistTracks}
                //set isInPlaylist to "true" when tracklist is rendered through Playlist
                isInPlaylist={true}
                addTrack={addTrack}
             />
        </div>
    )
}

export default Playlist;