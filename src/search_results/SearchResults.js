import React from 'react';
import Track from '../track/Track';

function SearchResults(props) {
    return (
        <div>
            <h2>Search Results</h2>      
            <div className="resultsTracklist">
                <Track />
            </div>
        </div>
    
    );
};

export default SearchResults;