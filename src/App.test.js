import React from 'react';
import { render } from '@testing-library/react';
import LoginComponent from './Components/Account/Login';

test('renders learn react link', () => {
  const { getByText } = render(<LoginComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
