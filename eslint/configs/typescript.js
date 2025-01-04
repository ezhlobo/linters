const tseslint = require('typescript-eslint');
const tsdoc = require('eslint-plugin-tsdoc');

const { TYPESCRIPT_FILES } = require('../constants');
const { applyConfigsToFiles } = require('../utils');
const typescriptRules = require('../rules/typescript');
const tsdocRules = require('../rules/tsdoc');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        typescript: { alwaysTryTypes: true },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      tsdoc,
    },
    rules: {
      ...typescriptRules,
    },
  },
  ...applyConfigsToFiles(TYPESCRIPT_FILES, [
    {
      rules: {
        ...tsdocRules,
      },
    },
  ]),
];
