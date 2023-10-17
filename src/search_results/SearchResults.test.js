import * as React from 'react';
import { render, screen } from '@testing-library/react';

import SearchResults from './SearchResults';
import mockTracks from '../SpotifyUtility';

describe('renders to screen', () => {
    render(<SearchResults searchResults={mockTracks}/>);
    it('renders heading', async () => {
        const searchResults = await screen.getByText('Search Results');
        expect(searchResults).toBeInTheDocument();
    });
});