import React from 'react';
import Tracklist from '../tracklist/Tracklist';

function SearchResults( props ) {

    return (
        <div>
            <h2>Search Results</h2>      
            <div className="resultsTracklist">
                <Tracklist 
                    tracks={props.searchResults} 
                    addTrack={props.addTrack}
                    isInPlaylist={props.isInPlaylist}
                    removeTrack={props.removeTrack}
                />
            </div>
        </div>
    
    );
};

export default SearchResults;