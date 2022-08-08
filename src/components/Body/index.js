import React from 'react';
import { appSettings, apiSettings } from '../../app-settings';

export default function Body() {
  return (
    <div data-testid="body">
      Current environment is
      {' '}
      {appSettings.env}
      , base url is
      {' '}
      {apiSettings.baseUrl}
      .
    </div>
  );
}
