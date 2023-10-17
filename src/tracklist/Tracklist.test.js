import React from 'react';
import { screen, render } from '@testing-library/react';

import Tracklist from './Tracklist';
import mockTracks from '../SpotifyUtility';

describe('tracklist', () => {
    beforeEach(() => {
        render(<Tracklist tracks={mockTracks}/>);
    });

    it('renders Track components with formatted duration', async () => {
        const trackDurations = await screen.getAllByTestId("duration");

        trackDurations.forEach((trackDuration, index) => {
            const track = mockTracks[index];
            const expectedDuration = `${Math.floor((track.duration_ms/1000)/60)}:${Math.floor((track.duration_ms/1000)) % 60 < 10 ? "0" : ""}${Math.floor((track.duration_ms/1000) % 60)}`
        });
        
    });
}
)