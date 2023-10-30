import React, { useCallback } from 'react';

import Tracklist from '../tracklist/Tracklist';

function Playlist( {playlistTracks, playlistName, setPlaylistName, addTrack, removeTrack, savePlaylist, trackCount } ) {
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
            <button onClick={savePlaylist}>Save to Spotify</button>
            <p>{trackCount} song{trackCount > 1 ? "s" : ""}</p>
            <Tracklist 
                tracks={playlistTracks}
                //set isInPlaylist to "true" when tracklist is rendered through Playlist
                isInPlaylist={true}
                addTrack={addTrack}
                removeTrack={removeTrack}
             />
        </div>
    )
}

export default Playlist;