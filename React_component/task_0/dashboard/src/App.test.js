import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to My React App/i); // Change the text here
  expect(linkElement).toBeInTheDocument();
});