import * as React from 'react';
import { render, screen } from '@testing-library/react';

import SearchResults from './SearchResults';

describe('renders to screen', () => {
    render(<SearchResults />);
    it('renders heading', async () => {
        const searchResults = await screen.getByText('Search Results');
        expect(searchResults).toBeInTheDocument();
    });
});