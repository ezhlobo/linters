const jest = require('eslint-plugin-jest');

const { TYPESCRIPT_FILES } = require('../constants');
const jestRules = require('../rules/jest');
const { applyConfigsToFiles } = require('../utils');

/** @type {import("eslint").Linter.Config} */
module.exports = [
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
