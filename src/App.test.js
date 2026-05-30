import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the HAIR by Falke MVP sections', () => {
  render(<App />);

  expect(screen.getAllByText(/HAIR by Falke/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Diensten/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Prijzen/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Over Falke/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Acties/i).length).toBeGreaterThan(0);
  expect(screen.getAllByRole('button', { name: /boek afspraak/i }).length).toBeGreaterThan(0);
});
