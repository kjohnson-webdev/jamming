import React from 'react';
import { screen, render } from '@testing-library/react';

import Tracklist from './Tracklist';

describe('tracklist', () => {
    render(<Tracklist />);

    it('renders a heading', () => {
        expect(screen.getByText('Tracklist')).toBeInTheDocument();
    });
}
)