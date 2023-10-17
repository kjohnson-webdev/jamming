import React from 'react';
import { screen, render } from '@testing-library/react';

import Playlist from './Playlist';
import mockTracks from '../SpotifyUtility';

describe('Playlist element', () => {
    beforeEach(() => {
        render(<Playlist playlistTracks={mockTracks} />);
    });

    it('renders header', async () => {
        const header = await screen.findByText('Playlist');
        expect(header).toBeInTheDocument();
    });

    it('renders save button', async () => {
        const saveButton = await screen.findByRole('button');
        expect(saveButton).toBeInTheDocument();
    });
});