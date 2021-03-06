import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders news app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/News App/i);
  expect(linkElement).toBeInTheDocument();
});
