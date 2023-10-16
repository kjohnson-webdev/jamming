import React from 'react';
import Track from '../track/Track';
import mockTracks from '../SpotifyUtility';

function Tracklist() {
    return(
        <div>
            <h2>Tracklist</h2>
            <Track />
        </div>
        
    );
};

export default Tracklist;