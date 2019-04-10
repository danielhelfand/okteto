/**
 * Values of the constants used in this file are defined and injected at build time by 
 * webpack's DefinePlugin.
 * 
 * @see {webpack.config.js}
 */

/* global VERSION, MODE, GITHUB_CLIENT_ID */

const apiTokenKeyName = 'apitoken';

export const getToken = () => {
  return localStorage.getItem(apiTokenKeyName);
}

export default {
  version: VERSION,
  mode: MODE,
  githubClientId: GITHUB_CLIENT_ID,
  apiTokenKeyName
};
