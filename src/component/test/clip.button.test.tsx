import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CopyToClipboardButton from '../clip.button';

describe('CopyToClipboardButton Component', () => {
  test('renders the button', () => {
    const mockHandler = jest.fn();

    const { getByRole } = render(
      <CopyToClipboardButton copy="test" handler={mockHandler} />
    );

    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls the handler function when clicked', () => {
    const mockHandler = jest.fn();

    const { getByRole } = render(
      <CopyToClipboardButton copy="test" handler={mockHandler} />
    );

    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockHandler).toHaveBeenCalled();
  });
});
