import jest from 'eslint-plugin-jest';

import { TYPESCRIPT_FILES } from '../constants.js';
import jestRules from '../rules/jest.js';
import { applyConfigsToFiles } from '../utils.js';

/** @type {import("eslint").Linter.Config} */
export default [
  ...jest.configs['flat/recommended'],
  ...jest.configs['flat/style'],
  {
    rules: {
      ...jestRules,
    },
  },
  ...applyConfigsToFiles(TYPESCRIPT_FILES, [
    {
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ]),
];
