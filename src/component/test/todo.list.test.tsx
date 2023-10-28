import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoListComponent from '../todo.list';

describe('TodoListComponent Component', () => {
  test('renders the list item with title, created date, and icon', () => {
    const mockIcon = <div>Mock Icon</div>;

    const { getByText } = render(
      <TodoListComponent
        title="Test Title"
        createdAt="2023-10-30T12:34:56Z"
        icon={mockIcon}
      />
    );

    const titleElement = getByText('Test Title');
    const createdAtElement = getByText('2023-10-30T12:34:56Z');
    const iconElement = getByText('Mock Icon');

    expect(titleElement).toBeInTheDocument();
    expect(createdAtElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test('calls the copy handler and shows a success message', () => {
    const mockIcon = <div>Mock Icon</div>;

    const { getByRole, getByText } = render(
      <TodoListComponent
        title="Test Title"
        createdAt="2023-10-30T12:34:56Z"
        icon={mockIcon}
      />
    );

    const copyButton = getByRole('button', { name: 'Copy To Clipboard' });
    fireEvent.click(copyButton);

    const successMessage = getByText('Your Todo item of title Test Title as been clicked');
    expect(successMessage).toBeInTheDocument();
  });
});
