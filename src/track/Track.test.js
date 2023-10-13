import React from 'react';
import { screen, render } from '@testing-library/react';

import Track from './Track';

describe('track elements', () => {
    beforeEach(() => {
        render(<Track />);
      });
      
    screen.debug();

    it('render Song Title', async () => {
        const songTitle = await screen.getByText(/Song Title/);
        expect(songTitle).toBeInTheDocument();
    });
    it('render Artist Name', async () => {
        const artist = await screen.getByText('Artist Name');
        expect(artist).toBeInTheDocument();
    });

    it('render Album name', async () => {
        const album = await screen.getByText('Album');
        expect(album).toBeInTheDocument();
    });

    it('render track duration', async () => {
        const trackDuration = await screen.getByText('duration');
        expect(trackDuration).toBeInTheDocument();
    });
});