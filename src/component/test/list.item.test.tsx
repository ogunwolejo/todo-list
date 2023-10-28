import React from 'react';
import { render } from '@testing-library/react';
import List from '../list.items';

describe('List Component', () => {
  test('renders the list item with title, created date, and icon', () => {
    const mockIcon = <div>Mock Icon</div>;

    const { getByText } = render(
      <List
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
});
