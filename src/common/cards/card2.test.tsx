import React from 'react';
import { render } from '@testing-library/react';
import Card2 from './card2';

describe('Card2 Component', () => {
  const mockList = [
    { title: 'Item 1', createdAt: '2023-10-30T12:34:56Z' },
    { title: 'Item 2', createdAt: '2023-10-31T08:45:00Z' },
    // Add more mock data as needed
  ];

  test('renders the card with provided title and list items', () => {
    const handleButtonClick = jest.fn();
    const { getByText, getAllByTestId } = render(
      <Card2 cardTitle="Test Card" list={mockList} routerHandler={handleButtonClick} />
    );

    const titleElement = getByText('Test Card');
    const listItems = getAllByTestId('list-item');

    expect(titleElement).toBeInTheDocument();
    expect(listItems).toHaveLength(mockList.length);
  });

  test('renders default icon if listIcon prop is not provided', () => {
    const handleButtonClick = jest.fn();
    const { getByTestId } = render(
      <Card2 cardTitle="Test Card" list={mockList} routerHandler={handleButtonClick} />
    );

    const defaultIconElement = getByTestId('default-icon');
    expect(defaultIconElement).toBeInTheDocument();
  });

  test('does not render view button if isBtn prop is false', () => {
    const handleButtonClick = jest.fn();
    const { queryByText } = render(
      <Card2 cardTitle="Test Card" list={mockList} routerHandler={handleButtonClick} isBtn={false} />
    );

    const viewButton = queryByText('view');
    expect(viewButton).toBeNull();
  });

  test('matches snapshot', () => {
    const handleButtonClick = jest.fn();
    const { asFragment } = render(
      <Card2 cardTitle="Test Card" list={mockList} routerHandler={handleButtonClick} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
