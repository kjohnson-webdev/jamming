import { render, screen } from '@testing-library/react';
import App from './App.js';


describe('Full app', () => {
  beforeEach(() => {
    render(<App />)
  });

  it('renders app name', async () => {
    const jamming = await screen.getByText('Jamming');
    expect(jamming).toBeInTheDocument();
  });
});