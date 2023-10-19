import React from 'react';

function Track({ name, artist, album, duration, isInPlaylist, addTrack }) {


    const renderAction = () => {
        if (isInPlaylist) {
            return (
                <button className="Track-action">
                    -
                </button>
            );
        } else {
            return (
                <button className='Track-action' onClick={addTrack}>
                    +
                </button>
            )
        }
    }

    return (
        <div>
            <h3>{name}</h3>
            <p><span>{artist}</span> | <span>{album}</span></p>
            <p data-testid="duration">{duration}</p>
            {renderAction()}
        </div>
    );
};

export default Track;