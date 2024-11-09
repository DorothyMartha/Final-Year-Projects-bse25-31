import React from 'react'; 
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock axios to avoid the import error during testing
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  // You can mock other methods here as needed
}));

test('renders learn react link', () => {
  render(<App />);  // No need to wrap with BrowserRouter here
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
