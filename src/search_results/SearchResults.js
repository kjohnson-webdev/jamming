import React from 'react';
import Track from '../track/Track';

function SearchResults(props) {
    return (
        <div>
            <h1>Search Results</h1>      
            <div className="resultsTracklist">
                <Track />
            </div>
        </div>
    
    );
};

export default SearchResults;