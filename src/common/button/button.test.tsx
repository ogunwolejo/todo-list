import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SaveButton from './save.button';

describe('SaveButton Component', () => {
  test('renders the button with "Save" text', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<SaveButton handler={handleClick} />);
    const buttonElement = getByText('Save');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls the handler function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<SaveButton handler={handleClick} />);
    const buttonElement = getByText('Save');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('matches snapshot', () => {
    const handleClick = jest.fn();
    const { asFragment } = render(<SaveButton handler={handleClick} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
