import React, { useState } from 'react';
import './App.css';
import SearchBar from './search_bar/SearchBar';
import SearchResults from './search_results/SearchResults';
import Playlist from './playlist/Playlist';
import mockTracks, { mockPlaylist } from './SpotifyUtility';

function App() {
  const [searchResults, setSearchResults] = useState(mockTracks);
  const [playlistTracks, setPlaylistTracks] = useState(mockPlaylist);
  const [playlistName, setPlaylistName] = useState("");
  const [trackCount, setTrackCount] = useState(0);
  const [playlistDuration, setPlaylistDuration] = useState("0:00");

  return (
    <div>
      <h1>Jamming</h1>
      <h2>Create a Spotify Playlist</h2>
      <SearchBar data-testid="search-bar" >
        Search:
      </SearchBar>
      <div>
        <SearchResults searchResults={searchResults} />
        <Playlist playlistTracks={playlistTracks} />
      </div>
    </div>
  );
};

export default App;