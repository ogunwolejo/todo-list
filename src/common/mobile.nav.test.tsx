import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter to test NavLink

import Dropdown from './mobile.nav';

describe('Dropdown Component', () => {
  test('renders the dropdown button', () => {
    const { getByRole } = render(<Dropdown />);
    const buttonElement = getByRole('button', { name: /toggle dropdown/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('toggles the dropdown menu when button is clicked', () => {
    const { getByRole, getByText } = render(<Dropdown />);

    const buttonElement = getByRole('button', { name: /toggle dropdown/i });
    fireEvent.click(buttonElement);

    const menuElement = getByText('Dashboard');
    expect(menuElement).toBeInTheDocument();
  });

  test('renders navigation links when dropdown is open', () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <Dropdown />
      </MemoryRouter>
    );

    const buttonElement = getByRole('button', { name: /toggle dropdown/i });
    fireEvent.click(buttonElement);

    const dashboardLink = getByText('Dashboard');
    const categoriesLink = getByText('Categories');
    const todosLink = getByText('Todos');

    expect(dashboardLink).toBeInTheDocument();
    expect(categoriesLink).toBeInTheDocument();
    expect(todosLink).toBeInTheDocument();
  });

  test('navigates to the correct routes when links are clicked', () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <Dropdown />
      </MemoryRouter>
    );

    const buttonElement = getByRole('button', { name: /toggle dropdown/i });
    fireEvent.click(buttonElement);

    const categoriesLink = getByText('Categories');
    fireEvent.click(categoriesLink);

    // Check if the navigation occurs correctly. You can add similar tests for other links.
    expect(window.location.pathname).toBe('/categories');
  });
});
