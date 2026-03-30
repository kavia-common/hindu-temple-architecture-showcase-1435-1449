import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main app with navigation', () => {
  render(<App />);
  const brandElement = screen.getByText(/Temple Architecture/i);
  expect(brandElement).toBeInTheDocument();
});
