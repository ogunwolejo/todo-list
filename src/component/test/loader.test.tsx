import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../loader';

describe('Loader Component', () => {
  test('renders the loader', () => {
    const { getByTestId } = render(<Loader />);
    const loaderElement = getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
