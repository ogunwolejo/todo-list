import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CategoryCard from '../categor.card';
import moment from 'moment';

describe('CategoryCard Component', () => {
  const mockData = {
    title: 'Test Title',
    createdAt: moment(),
    icon: <div>Mock Icon</div>,
    description: 'Test Description'
  };

  test('renders the card with provided title and data', () => {
    const { getByText } = render(
      <CategoryCard
        title={mockData.title}
        createdAt={mockData.createdAt}
        icon={mockData.icon}
        description={mockData.description}
      />
    );

    const titleElement = getByText('Test Title');
    const dataElement = getByText('42');
    expect(titleElement).toBeInTheDocument();
    expect(dataElement).toBeInTheDocument();
  });

  test('opens the modal when clicked', () => {
    const { getByText, getByTestId } = render(
      <CategoryCard
        title={mockData.title}
        createdAt={mockData.createdAt}
        icon={mockData.icon}
        description={mockData.description}
      />
    );

    const cardElement = getByTestId('category-card');
    fireEvent.click(cardElement);

    const modalTitleElement = getByText('Test Title');
    const modalDataElement = getByText('42');

    expect(modalTitleElement).toBeInTheDocument();
    expect(modalDataElement).toBeInTheDocument();
  });
});
