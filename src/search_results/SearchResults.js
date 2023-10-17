import React from 'react';
import Tracklist from '../tracklist/Tracklist';

function SearchResults( {searchResults} ) {

    return (
        <div>
            <h2>Search Results</h2>      
            <div className="resultsTracklist">
                <Tracklist tracks={searchResults} />
            </div>
        </div>
    
    );
};

export default SearchResults;