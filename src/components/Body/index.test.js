import React from 'react';
import { render, screen } from '@testing-library/react';
import Body from './index';
import { appSettings, apiSettings } from '../../app-settings';

describe('test Header component', () => {
  it('can render correctly', () => {
    render(<Body />);
    const renderText = `Current environment is ${appSettings.env}, base url is ${apiSettings.baseUrl}.`;
    expect(screen.getByTestId('body').textContent).toBe(renderText);
  });
});
