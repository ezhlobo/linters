import globals from 'globals';

import base from './_base.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...base,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
