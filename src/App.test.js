import { getByTestId, render, screen } from '@testing-library/react';
import App from './App.js';


describe('Full app', () => {
  beforeEach(() => {
    render(<App />)
  });

  it('renders the Search Bar', async () => {
    const jamming = await screen.getByText('Jamming');
    expect(jamming).toBeInTheDocument();
  });
});