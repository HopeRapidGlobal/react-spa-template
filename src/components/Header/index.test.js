import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

describe('test Header component', () => {
  it('can render correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('This is header')).toBeInTheDocument();
  });
});
