import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddDataForm from '../add.data';

describe('AddDataForm Component', () => {
  test('renders the form with input fields', () => {
    const mockHandler = jest.fn();
    const mockResetHandler = jest.fn();

    const { getByLabelText } = render(
      <AddDataForm handler={mockHandler} resetHandler={mockResetHandler} isTodoForm={true} categoriresData={[]} />
    );

    const titleInput = getByLabelText(/title/i);
    const descriptionInput = getByLabelText(/description/i);
    const categorySelect = getByLabelText(/category/i);

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(categorySelect).toBeInTheDocument();
  });

  test('handles form submission correctly', () => {
    const mockHandler = jest.fn();
    const mockResetHandler = jest.fn();

    const { getByText } = render(
      <AddDataForm handler={mockHandler} resetHandler={mockResetHandler} isTodoForm={true} categoriresData={[]} />
    );

    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton);

    // Check if handler function is called
    expect(mockHandler).toHaveBeenCalled();
  });

  test('handles form cancellation correctly', () => {
    const mockHandler = jest.fn();
    const mockResetHandler = jest.fn();

    const { getByText } = render(
      <AddDataForm handler={mockHandler} resetHandler={mockResetHandler} isTodoForm={true} categoriresData={[]} />
    );

    const cancelButton = getByText(/cancel/i);
    fireEvent.click(cancelButton);

    // Check if resetHandler function is called
    expect(mockResetHandler).toHaveBeenCalled();
  });

  // Add more tests as needed
});
