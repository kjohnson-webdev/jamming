import React from 'react';
import Tracklist from '../tracklist/Tracklist';

function SearchResults(props) {

    console.log(props.tracks);

    return (
        <div>
            <h2>Search Results</h2>      
            <div className="resultsTracklist">
                <Tracklist tracks={props.searchResults} />
            </div>
        </div>
    
    );
};

export default SearchResults;