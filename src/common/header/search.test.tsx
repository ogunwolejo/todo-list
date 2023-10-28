import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {SearchInput} from './header';

describe('SearchInput Component', () => {
  test('renders the input field correctly', () => {
    const { getByPlaceholderText } = render(<SearchInput handler={() => {}} search="" />);
    const inputElement = getByPlaceholderText('Search anything...');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls the handler function when input value changes', () => {
    const handleSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchInput handler={handleSearch} search="" />);
    const inputElement = getByPlaceholderText('Search anything...');

    fireEvent.change(inputElement, { target: { value: 'Test Value' } });
    expect(handleSearch).toHaveBeenCalledWith('Test Value');
  });

  // Add more tests as needed
});
