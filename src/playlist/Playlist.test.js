import React from 'react';
import { screen, render } from '@testing-library/react';

import Playlist from './Playlist';

describe('Playlist element', () => {
    render(<Playlist />);

    it('renders header', async () => {
        const header = await screen.findByText('New Playlist');
        expect(header).toBeInTheDocument();
    });
})