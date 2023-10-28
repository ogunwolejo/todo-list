import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CopyToClipboardButton from '../clip.button';

test('CopyToClipboardButton should call handler when clicked', () => {
  // Define a mock handler function
  const mockHandler = jest.fn();

  // Render the component with the mock handler
  const { getByRole } = render(<CopyToClipboardButton copy="Some text to copy" handler={mockHandler} />);

  // Find the button element
  const button = getByRole('button');

  // Simulate a click on the button
  fireEvent.click(button);

  // Ensure that the handler was called
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
