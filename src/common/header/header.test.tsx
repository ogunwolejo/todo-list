import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

describe('Header Component', () => {
  test('renders the title correctly', () => {
    const { getByText } = render(<Header title="Test Title" search="" handler={() => {}} />);
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the SearchInput component', () => {
    const { getByPlaceholderText } = render(<Header title="Test Title" search="" handler={() => {}} />);
    const searchInput = getByPlaceholderText('Search anything...');
    expect(searchInput).toBeInTheDocument();
  });

  // Add more tests as needed
});
