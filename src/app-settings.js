/* eslint-disable prefer-destructuring */
const REACT_APP_ENV_NAME = process.env.REACT_APP_ENV_NAME;
const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
const REACT_APP_URL_AUTH = process.env.REACT_APP_URL_AUTH;

export const appSettings = {
  env: REACT_APP_ENV_NAME,
};

export const apiSettings = {
  baseUrl: REACT_APP_URL_API,
};

export const authSettings = {
  authUrl: REACT_APP_URL_AUTH,
};
