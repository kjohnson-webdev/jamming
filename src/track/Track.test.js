import React from 'react';
import { screen, render } from '@testing-library/react';

import Track from './Track';
import mockTracks from '../SpotifyUtility';

describe('Track component', () => {
    const track = mockTracks[1];

    beforeEach(() => {
        render(<Track 
            name={track.name}
            artist={track.artists[0].name}
            album={track.album.name}
            duration={track.duration_ms}
        />);
      });

    it('renders Song Title', async () => {
        const songTitle = await screen.getByText(track.name);
        expect(songTitle).toBeInTheDocument();
    });

    it('render Artist Name', async () => {
        const artist = await screen.getByText(track.artists[0].name);
        expect(artist).toBeInTheDocument();
    });

    it('renders Album name', async () => {
        const album = await screen.getByText(track.album.name);
        expect(album).toBeInTheDocument();
    });

    it('renders track duration', async () => {
        const trackDuration = await screen.getByText(track.duration_ms);
        expect(trackDuration).toBeInTheDocument();
    });
    

});