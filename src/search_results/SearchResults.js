import React from 'react';
import Tracklist from '../tracklist/Tracklist';

function SearchResults(props) {
    return (
        <div>
            <h2>Search Results</h2>      
            <div className="resultsTracklist">
                <Tracklist />
            </div>
        </div>
    
    );
};

export default SearchResults;