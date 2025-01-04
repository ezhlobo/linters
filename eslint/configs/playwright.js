const playwright = require('eslint-plugin-playwright');

const playwrightRules = require('../rules/playwright');

/** @type {import('eslint').Linter.Config} */
module.exports = [
  ...playwright.configs['flat/recommended'],
  {
    rules: {
      ...playwrightRules,
    },
  },
];
