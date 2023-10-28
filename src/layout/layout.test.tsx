import React from 'react';
import { render } from '@testing-library/react';
import Layout from './layout';

describe('Layout Component', () => {
  test('renders without errors', () => {
    render(<Layout />);
  });
});
