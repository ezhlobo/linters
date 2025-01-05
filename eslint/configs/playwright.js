import playwright from 'eslint-plugin-playwright';

import playwrightRules from '../rules/playwright.js';

/** @type {import('eslint').Linter.Config} */
export default [
  ...playwright.configs['flat/recommended'],
  {
    rules: {
      ...playwrightRules,
    },
  },
];
