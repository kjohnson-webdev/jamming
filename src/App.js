import React from 'react';
import './App.css';
import SearchBar from './search_bar/SearchBar';
import SearchResults from './search_results/SearchResults';
import Playlist from './playlist/Playlist';

function App() {
  return (
    <div>
      <h1>Jamming</h1>
      <h2>Create a Spotify Playlist</h2>
      <SearchBar data-testid="search-bar">
        Search:
      </SearchBar>
      <div>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
};

export default App;