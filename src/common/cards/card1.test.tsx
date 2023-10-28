import React from 'react';
import { render } from '@testing-library/react';
import Card1 from './card1';

describe('Card1 Component', () => {
  test('renders the card with provided title, background color, and data', () => {
    const { getByText } = render(<Card1 title="Test Card" bgColor="#FF5733" data={42} />);
    const titleElement = getByText('Test Card');
    const dataElement = getByText('42');
    expect(titleElement).toBeInTheDocument();
    expect(dataElement).toBeInTheDocument();
    expect(titleElement.parentElement).toHaveStyle('background-color: #FF5733');
  });

  test('renders with default color if color prop is not provided', () => {
    const { getByText } = render(<Card1 title="Test Card" bgColor="#FF5733" data={42} />);
    const titleElement = getByText('Test Card');
    expect(titleElement).toHaveClass('text-white');
  });

  test('renders with custom color if color prop is provided', () => {
    const { getByText } = render(<Card1 title="Test Card" bgColor="#FF5733" data={42} color="text-blue-500" />);
    const titleElement = getByText('Test Card');
    expect(titleElement).toHaveClass('text-blue-500');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Card1 title="Test Card" bgColor="#FF5733" data={42} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
