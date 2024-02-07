import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './search_bar/SearchBar';
import SearchResults from './search_results/SearchResults';
import Playlist from './playlist/Playlist';
import Spotify from './SpotifyUtility';
import mockTracks, { mockPlaylist } from './mockTracks';

function App() {
  const [searchResults, setSearchResults] = useState(mockTracks);
  const [playlistTracks, setPlaylistTracks] = useState(mockPlaylist);
  const [playlistName, setPlaylistName] = useState("");
  const [trackCount, setTrackCount] = useState(0);
  // Out of scope for now
  // const [playlistDuration, setPlaylistDuration] = useState("0:00");

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => track.id === savedTrack.id))
        return;
      setPlaylistTracks((prevTracks) => [...prevTracks, track])
  });

  const removeTrack = useCallback(
    (track) => {
      setPlaylistTracks((prevTrack) => playlistTracks.filter((prevTrack) => prevTrack.id !== track.id))
    }
  )

  const savePlaylist = useCallback(() => {
    if (trackCount === 0) {
      alert('add tracks to the playlist first!');
      return
    } else if (playlistName === "") {
      alert("name your playlist first!")
      return
    } else {
    const playlistUris = playlistTracks.map((track) => track.uri);
    console.log(playlistUris);
    alert(`${playlistName} saved with ${playlistUris.length} track(s)
    ${playlistUris}`);
    return playlistUris;
    }
  }, [trackCount, playlistName]);

  useEffect(() => {
    setTrackCount(playlistTracks.length);
  }, 
  [playlistTracks]
  )

  return (
    <div>
      <h1>Jamming</h1>
      <h2>Create a Spotify Playlist</h2>
      <Spotify>
        
      </Spotify>
      <SearchBar 
        data-testid="search-bar" 
      >
        Search:
      </SearchBar>
      <div>
        <SearchResults 
          searchResults={searchResults} 
          addTrack={addTrack}
        />
        <Playlist 
          playlistTracks={playlistTracks}
          playlistName={playlistName}
          setPlaylistName={setPlaylistName} 
          addTrack={addTrack}
          removeTrack={removeTrack}
          savePlaylist={savePlaylist}
          trackCount={trackCount}
        />
      </div>
    </div>
  );
};

export default App;