import * as React from 'react';
import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar.js';

describe('SearchBar', () => {
    it('renders SearchBar component', () => {
        render(<SearchBar />);

        expect(screen.getByText('Go')).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();

    });
});